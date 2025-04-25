import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { UserAuthService } from "./user_auth.service";

@Controller("user-auth")
export class UserAuthController {
	constructor(private readonly userAuthService: UserAuthService) {}
	@Post("sign-up")
	signUp(@Body() createUserDto: CreateUserDto) {
		return this.userAuthService.signUp(createUserDto);
	}
	@HttpCode(200)
	@Post("sign-in")
	signIn(@Body() signInDto: SignInDto) {
		return this.userAuthService.signIn(signInDto);
	}
}
