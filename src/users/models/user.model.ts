import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";

interface IUserCrationAttr {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	photo: string;
	refreshToken: string;
}
@Table({ tableName: "users", freezeTableName: true })
export class User extends Model<User, IUserCrationAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.STRING })
	declare firstName: string;
	@Column({ type: DataType.STRING })
	declare lastName: string;
	@Column({ type: DataType.STRING })
	declare email: string;
	@Column({ type: DataType.STRING })
	declare password: string;
	@Column({ type: DataType.STRING })
	declare photo: string;
	@Column({ type: DataType.STRING })
	declare refreshToken: string;
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isActive: boolean;
	@HasMany(() => Block)
	block: Block[];
}
