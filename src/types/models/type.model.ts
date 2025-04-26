import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITypesCreattionAttr {
	name: string;
	description: string;
}
@Table({ tableName: "types", freezeTableName: true })
export class Type extends Model<Type, ITypesCreattionAttr> {
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
		example: "type1",
		description: "type name: any",
	})
	@Column({ type: DataType.STRING })
	name: string;
	@ApiProperty({
		example: "type1 desc",
		description: "type description",
	})
	@Column({ type: DataType.STRING })
	description: string;
}
