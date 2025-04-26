import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
	@ApiProperty({
		example: "admin@example.com",
		description:"admin's mail"
	})
	readonly email: string;
	@ApiProperty({
		example: "adminspass",
		description:"admin's strong password"
	})
	readonly password: string;
}
