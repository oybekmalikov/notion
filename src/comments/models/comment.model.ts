import { ApiProperty } from "@nestjs/swagger";
import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";
import { User } from "../../users/models/user.model";

interface ICommentCreationAttr {
	content: string;
	userId: number;
	blockId: number;
	isEdited: boolean;
}
@Table({ tableName: "comments", freezeTableName: true })
export class Comment extends Model<Comment, ICommentCreationAttr> {
	@ApiProperty({
		description: "comment id",
	})
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	declare id: number;

	@ApiProperty({
		description: "comment's content",
	})
	@Column({ type: DataType.STRING })
	declare content: string;

	@ApiProperty({
		description: "comment's owner",
	})
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	declare userId: number;

	@ApiProperty({
		description: "comment's block id",
	})
	@ForeignKey(() => Block)
	@Column({ type: DataType.INTEGER })
	declare blockId: number;

	@ApiProperty({
		description:
			"You can add a true value if commnet has edited, otherwise false",
	})
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isEdited: boolean;
	@BelongsTo(() => Block)
	block: Block;
	@BelongsTo(() => User)
	user: User;
}
