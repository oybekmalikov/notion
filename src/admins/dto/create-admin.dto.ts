import { IsAlpha, IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateAdminDto {
	@IsAlpha(undefined, { message: "Invalid value" })
	fullName: string;
	@IsEmail({}, { message: "Invalid email" })
	email: string;
	@IsStrongPassword({}, { message: "Too weak password, use stongger password" })
	password: string;
	@IsString({ message: "Invalid value" })
	refreshToken: string;
	isCreator: boolean;
}
