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
	@ApiProperty({
		example: "1",
		description: "block's id",
	})
	@ForeignKey(() => Block)
	@Column({ type: DataType.INTEGER })
	declare blockId: number;
	@ApiProperty({
		example: "1",
		description: "prroperty's id",
	})
	@ForeignKey(() => Propety)
	@Column({ type: DataType.INTEGER })
	declare propertyId: number;
	@Column({ type: DataType.STRING })
	@ApiProperty({
		example: "any value",
		description: "any value",
	})
	declare value: string;
	@BelongsTo(() => Propety)
	property: Propety;
	@BelongsTo(() => Block)
	block: Block;
}
