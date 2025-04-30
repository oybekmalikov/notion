import { ApiProperty } from "@nestjs/swagger";
import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from "sequelize-typescript";
import { BlockProperty } from "../../block_properties/models/block_property.model";
import { Comment } from "../../comments/models/comment.model";
import { User } from "../../users/models/user.model";

interface IBlockCreationAttr {
	typeId: number;
	createdBy: number;
	parent: number;
	orderIndex: number;
}
@Table({ tableName: "blocks", freezeTableName: true })
export class Block extends Model<Block, IBlockCreationAttr> {
	@ApiProperty({
		example: "1",
		description: "block id",
	})
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@ApiProperty({
		example: "1",
		description: "type id",
	})
	@Column({ type: DataType.INTEGER })
	declare typeId: number;
	@ApiProperty({
		example: "1",
		description: "creator's id",
	})
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	declare createdBy: number;
	@ApiProperty({
		example: "1",
		description: "parent id",
	})
	@Column({ type: DataType.INTEGER })
	declare parent: number;
	@Column({ type: DataType.INTEGER })
	@ApiProperty({
		example: "1",
		description: "order index",
	})
	declare orderIndex: number;
	@HasMany(() => BlockProperty)
	blockProperty: BlockProperty;
	@BelongsTo(() => User)
	user: User;
	@HasMany(() => Comment)
	comments: Comment[];
}
