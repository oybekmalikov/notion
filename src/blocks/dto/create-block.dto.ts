import { ApiProperty } from "@nestjs/swagger";

export class CreateBlockDto {
	@ApiProperty({
		example: "1",
		description: "type id",
	})
	typeId: number;
	@ApiProperty({
		example: "1",
		description: "creator's id",
	})
	createdBy: number;
	@ApiProperty({
		example: "1",
		description: "parent id",
	})
	parent: number;
	@ApiProperty({
		example: "1",
		description: "order index",
	})
	orderIndex: number;
}
