import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { User } from "../users/models/user.model";
import { UsersService } from "../users/users.service";
import { SignInDto } from "./dto/sign-in.dto";
@Injectable()
export class UserAuthService {
	constructor(
		private readonly userService: UsersService,
		private readonly jwtService: JwtService
	) {}
	private async generateToken(user: User) {
		const payload = {
			id: user.id,
			email: user.email,
			roles: ["user"],
			isActive: user.isActive,
		};
		return { token: this.jwtService.sign(payload) };
	}
	async signUp(createUserDto: CreateUserDto) {
		const condidate = await this.userService.findByEmail(createUserDto.email);
		if (condidate) {
			throw new BadRequestException("Email already exists");
		}
		const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
		createUserDto.password = hashedPassword;
		const newUser = await this.userService.create(createUserDto);
		return newUser;
	}
	async signIn(signInDto: SignInDto) {
		const user = await this.userService.findByEmail(signInDto.email);
		if (!user) {
			throw new UnauthorizedException("Wrong password or email");
		}
		const validPassword = await bcrypt.compare(
			signInDto.password,
			user.password
		);
		if (!validPassword) {
			throw new UnauthorizedException("Wrong password or email");
		}
		return this.generateToken(user);
	}
}
