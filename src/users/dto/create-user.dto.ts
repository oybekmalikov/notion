import { IsAlpha, IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
	@IsAlpha(undefined, { message: "Wrong input" })
	firstName: string;
	@IsAlpha(undefined, { message: "Wrong input" })
	lastName: string;
	@IsEmail({}, { message: "Invalid email" })
	email: string;
	@IsStrongPassword(
		{},
		{ message: "Password not strong enough, use strongger password" }
	)
	password: string;
	@IsString({ message: "Invalid value" })
	photo: string;
	refreshToken: string;
}
