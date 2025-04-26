import { ApiProperty } from "@nestjs/swagger";

export class CreateBlockPropertyDto {
	@ApiProperty({
		example: "1",
		description: "block's id",
	})
	blockId: number;
	@ApiProperty({
		example: "1",
		description: "prroperty's id",
	})
	propertyId: number;
	@ApiProperty({
		example: "any value",
		description: "any value",
	})
	value: string;
}
