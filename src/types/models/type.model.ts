import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITypesCreattionAttr {
	name: string;
	description: string;
}
@Table({ tableName: "types", freezeTableName: true })
export class Type extends Model<Type, ITypesCreattionAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.STRING })
	name: string;
	@Column({ type: DataType.STRING })
	description: string;
}
