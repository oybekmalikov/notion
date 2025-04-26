import { ApiProperty } from "@nestjs/swagger";

export class CreatePropetyDto {
	@ApiProperty({
		example: "prop1",
		description: "property name",
	})
	name: string;
	@ApiProperty({
		example: "prop1 description",
		description: "property description",
	})
	description: string;
}
