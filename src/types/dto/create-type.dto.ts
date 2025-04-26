import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeDto {
	@ApiProperty({
		example: "type1",
		description: "type name: any",
	})
	name: string;
	@ApiProperty({
		example: "type1 desc",
		description: "type description",
	})
	description: string;
}
