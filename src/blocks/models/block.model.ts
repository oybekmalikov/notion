import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BlockProperty } from "../../block_properties/models/block_property.model";

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
	typeId: number;
	@Column({ type: DataType.INTEGER })
	createdBy: number;
	@Column({ type: DataType.INTEGER })
	parent: number;
	@Column({ type: DataType.INTEGER })
	orderIndex: number;
	@HasMany(() => BlockProperty)
	blockProperty: BlockProperty;
}
