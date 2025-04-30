import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
	@ApiProperty({
		description: "comment's content",
	})
	@IsString({ message: "Content must be a string" })
	content: string;
	@ApiProperty({
		description: "comment's owner",
	})
	@IsNumber({}, { message: "Comment's owner id must be a number" })
	userId: number;
	@ApiProperty({
		description: "comment's block",
	})
	@IsNumber({}, { message: "Comment's block id must be a number" })
	blockId: number;
	@ApiProperty({
		description: "comment's edit prop",
	})
	@IsBoolean({ message: "Comment's edit prop must be a boolean(true/false)" })
	isEdited: boolean;
}
