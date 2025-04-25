import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AdminsService } from "../admins/admins.service";
import { CreateAdminDto } from "../admins/dto/create-admin.dto";
import { Admin } from "../admins/models/admin.model";
import { SignInDto } from "./dto/sign-in.dto";
@Injectable()
export class AdminAuthService {
	constructor(
		private readonly adminService: AdminsService,
		private readonly jwtService: JwtService
	) {}
	private async generateToken(admin: Admin) {
		const payload = {
			id: admin.id,
			email: admin.email,
			roles: admin.isCreator ? ["admin", "superadmin"] : ["admin"],
			isActive: admin.isActive,
		};
		return { token: this.jwtService.sign(payload) };
	}
	async signUp(createAdminDto: CreateAdminDto) {
		const condidate = await this.adminService.findByEmail(createAdminDto.email);
		if (condidate) {
			throw new BadRequestException("Email already exists");
		}
		const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
		createAdminDto.password = hashedPassword;
		const newUser = await this.adminService.create(createAdminDto);
		return newUser;
	}
	async signIn(signInDto: SignInDto) {
		const admin = await this.adminService.findByEmail(signInDto.email);
		if (!admin) {
			throw new UnauthorizedException("Wrong password or email");
		}
		const validPassword = await bcrypt.compare(
			signInDto.password,
			admin.password
		);
		if (!validPassword) {
			throw new UnauthorizedException("Wrong password or email");
		}
		return this.generateToken(admin);
	}
}
