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
			isActive: admin.isActive,
			role: admin.isCreator ? "superadmin" : "admin",
		};
		try {
			return { token: this.jwtService.sign(payload) };
		} catch (err) {
			console.log(err)
			return err;
		}
	}
	async signUp(createAdminDto: CreateAdminDto) {
		const condidate = await this.adminService.findByEmail(createAdminDto.email);
		if (condidate) {
			throw new BadRequestException("Email already exists");
		}
		const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
		createAdminDto.password = hashedPassword;
		const newAdmin = await this.adminService.create(createAdminDto);
		return `New admin succesfully added with id: ${newAdmin.id}`;
	}
	async signIn(signInDto: SignInDto) {
		const admin = await this.adminService.findByEmail(signInDto.email);
		if (!admin) {
			throw new UnauthorizedException("Invalid email or password");
		}
		const validPassword = await bcrypt.compare(
			signInDto.password,
			admin.password
		);
		if (!validPassword) {
			throw new UnauthorizedException("Invalid email or password");
		}
		return this.generateToken(admin);
	}
}
