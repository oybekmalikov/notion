import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AdminAuthService } from "./admin_auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { CreateAdminDto } from '../admins/dto/create-admin.dto'

@Controller("admin-auth")
export class AdminAuthController {
	constructor(private readonly adminAuthService: AdminAuthService) {}
  @HttpCode(HttpStatus.OK)
	@Post("sign-up")
	signUp(@Body() adminDto: CreateAdminDto) {
		return this.adminAuthService.signUp(adminDto);
	}
	@HttpCode(HttpStatus.OK)
	@Post("sign-in")
	signIn(@Body() signInDto: SignInDto) {
		return this.adminAuthService.signIn(signInDto);
	}
}
