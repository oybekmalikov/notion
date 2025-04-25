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
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.STRING })
	declare fullName: string;
	@Column({ type: DataType.STRING })
	declare email: string;
	@Column({ type: DataType.STRING })
	declare password: string;
	@Column({ type: DataType.STRING })
	declare refreshToken: string;
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isCreator: boolean;
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isActive: boolean;
}
