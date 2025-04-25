import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateAdminDto } from "../admins/dto/create-admin.dto";
import { AdminAuthService } from "./admin_auth.service";
import { SignInDto } from './dto/sign-in.dto'

@Controller("admin-auth")
export class AdminAuthController {
	constructor(private readonly adminService: AdminAuthService) {}
	@Post("sign-up")
	signUp(@Body() createAdminDto: CreateAdminDto) {
		return this.adminService.signUp(createAdminDto);
	}
	@HttpCode(HttpStatus.OK)
	@Post("sign-in")
	signIn(@Body() signInDto: SignInDto) {
		return this.adminService.signIn(signInDto);
	}
}
