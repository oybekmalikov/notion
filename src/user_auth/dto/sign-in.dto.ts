import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
	@ApiProperty({
		example: "user@example.com",
		description: "user's description",
	})
	readonly email: string;
	@ApiProperty({
		example: "userpassword",
		description: "user strong password",
	})
	readonly password: string;
}
