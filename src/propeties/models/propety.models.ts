import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BlockProperty } from "../../block_properties/models/block_property.model";

interface IPropertiesCreattionAttr {
	name: string;
	description: string;
}
@Table({ tableName: "proprety", freezeTableName: true })
export class Propety extends Model<Propety, IPropertiesCreattionAttr> {
	@ApiProperty({
		example: "1",
		description: "property id",
	})
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@ApiProperty({
		example: "prop1",
		description: "property name",
	})
	@Column({ type: DataType.STRING })
	declare name: string;
	@ApiProperty({
		example: "prop1 description",
		description: "property description",
	})
	@Column({ type: DataType.STRING })
	declare description: string;
	@HasMany(() => BlockProperty)
	blockProperties: BlockProperty[];
}
