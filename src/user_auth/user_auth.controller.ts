import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserAuthService } from './user_auth.service';
import { SignInDto } from './dto/sign-in.dto'
import { CreateUserDto } from '../users/dto/create-user.dto'

@Controller('user-auth')
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthService) {}
	@Post("sign-up")
	signUp(@Body() createUserDto: CreateUserDto) {
		return this.userAuthService.signUp(createUserDto);
	}
	@HttpCode(HttpStatus.OK)
	@Post("sign-in")
	signIn(@Body() signInDto: SignInDto) {
		return this.userAuthService.signIn(signInDto);
	}
}
