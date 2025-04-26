import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
	@ApiProperty({
		example: "Ali",
		description: "user's name",
	})
	@IsAlpha(undefined, { message: "Wrong input" })
	firstName: string;
	@ApiProperty({
		example: "Umarov",
		description: "user's last name",
	})
	@IsAlpha(undefined, { message: "Wrong input" })
	lastName: string;
	@ApiProperty({
		example: "user@example.com",
		description: "user's email",
	})
	@IsEmail({}, { message: "Invalid email" })
	email: string;
	@ApiProperty({
		example: "userpassword",
		description: "user's strong password",
	})
	@IsStrongPassword(
		{},
		{ message: "Password not strong enough, use strongger password" }
	)
	password: string;
	@ApiProperty({
		example: "photp/user/image",
		description: "user's prophile photo",
	})
	@IsString({ message: "Invalid value" })
	photo: string;
	@ApiProperty({
		example: "...",
		description: "you should save user's refresh token here",
	})
	refreshToken: string;
}
