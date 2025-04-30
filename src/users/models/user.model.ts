import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";
import { Comment } from "../../comments/models/comment.model";

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
	@ApiProperty({
		example: "1",
		description: "user unique id",
	})
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@ApiProperty({
		example: "Ali",
		description: "user's first name",
	})
	@Column({ type: DataType.STRING })
	declare firstName: string;
	@ApiProperty({
		example: "Umarov",
		description: "user's last name",
	})
	@Column({ type: DataType.STRING })
	declare lastName: string;
	@ApiProperty({
		example: "user@example.com",
		description: "user's email",
	})
	@Column({ type: DataType.STRING })
	declare email: string;
	@ApiProperty({
		example: "userpassword",
		description: "user's strong password",
	})
	@Column({ type: DataType.STRING })
	declare password: string;
	@ApiProperty({
		example: "photp/user/image",
		description: "user's prophile photo",
	})
	@Column({ type: DataType.STRING })
	declare photo: string;
	@ApiProperty({
		example: "...",
		description: "you should save user's refresh token here",
	})
	@Column({ type: DataType.STRING })
	declare refreshToken: string;
	@ApiProperty({
		example: "false",
		description: "Is user active?",
	})
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare isActive: boolean;
	@HasMany(() => Block)
	block: Block[];
	@HasMany(() => Comment)
	comments: Comment[];
}
