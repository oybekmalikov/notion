import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreationAttr {
	fullName: string;
	email: string;
	password: string;
	refreshToken: string;
	isCreator: boolean;
}
@Table({ tableName: "admins", freezeTableName: true })
export class Admin extends Model<Admin, IAdminCreationAttr> {
	@ApiProperty({
		example: "id=1",
		description: "admin's unique id(autoincrement)",
	})
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@ApiProperty({
		example: "Ali Umarov",
		description: "admin's full name",
	})
	@Column({ type: DataType.STRING })
	declare fullName: string;
	@ApiProperty({
		example: "admin@example.com",
		description: "admin's mail",
	})
	@Column({ type: DataType.STRING })
	declare email: string;
	@ApiProperty({
		example: "adminspass",
		description: "admin's strong password",
	})
	@Column({ type: DataType.STRING })
	declare password: string;
	@ApiProperty({
		example: "...",
		description: "you should save a refresh token here",
	})
	@Column({ type: DataType.STRING })
	declare refreshToken: string;
	@ApiProperty({
		example: "true",
		description: "admin is creator?",
	})
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isCreator: boolean;
	@ApiProperty({
		example: "false",
		description: "admin is active?",
	})
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isActive: boolean;
}
