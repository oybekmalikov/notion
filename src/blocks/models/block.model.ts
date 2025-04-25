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
import { User } from "../../users/models/user.model";

interface IBlockCreationAttr {
	typeId: number;
	createdBy: number;
	parent: number;
	orderIndex: number;
}
@Table({ tableName: "blocks", freezeTableName: true })
export class Block extends Model<Block, IBlockCreationAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.INTEGER })
	declare typeId: number;
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	declare createdBy: number;
	@Column({ type: DataType.INTEGER })
	declare parent: number;
	@Column({ type: DataType.INTEGER })
	declare orderIndex: number;
	@HasMany(() => BlockProperty)
	blockProperty: BlockProperty;
	@BelongsTo(() => User)
	user: User;
}
