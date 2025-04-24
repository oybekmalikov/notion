import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BlockProperty } from "../../block_properties/models/block_property.model";

interface IPropertiesCreattionAttr {
	name: string;
	description: string;
}
@Table({ tableName: "proprety", freezeTableName: true })
export class Propety extends Model<Propety, IPropertiesCreattionAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.STRING })
	declare name: string;
	@Column({ type: DataType.STRING })
	declare description: string;
	@HasMany(() => BlockProperty)
	blockProperties: BlockProperty[];
}
