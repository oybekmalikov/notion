import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";
import { Propety } from "../../propeties/models/propety.models";

interface IBlockPropertyCreationAttr {
	blockId: number;
	propertyId: number;
	value: string;
}
@Table({ tableName: "block_properties", freezeTableName: true })
export class BlockProperty extends Model<
	BlockProperty,
	IBlockPropertyCreationAttr
> {
	@ForeignKey(() => Block)
	@Column({ type: DataType.INTEGER })
	declare blockId: number;
	@ForeignKey(() => Propety)
	@Column({ type: DataType.INTEGER })
	declare propertyId: number;
	@Column({ type: DataType.STRING })
	declare value: string;
	@BelongsTo(() => Propety)
	property: Propety;
	@BelongsTo(() => Block)
	block: Block;
}
