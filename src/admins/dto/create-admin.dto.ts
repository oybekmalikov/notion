import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateAdminDto {
	@ApiProperty({
		example: "Ali Umarov",
		description: "admin's full name",
	})
	@IsAlpha(undefined, { message: "Invalid value" })
	fullName: string;
	@ApiProperty({
		example: "admin@example.com",
		description: "admin's mail",
	})
	@IsEmail({}, { message: "Invalid email" })
	email: string;
	@ApiProperty({
		example: "adminspass",
		description: "admin's strong password",
	})
	@IsStrongPassword({}, { message: "Too weak password, use stongger password" })
	password: string;
	@ApiProperty({
		example: "...",
		description: "yuo should save a refresh token here",
	})
	@IsString({ message: "Invalid value" })
	refreshToken: string;
	@ApiProperty({
		example: "true",
		description: "admin is creator?",
	})
	isCreator: boolean;
}
