import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./models/user.model";

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private readonly userModel: typeof User) {}
	create(createUserDto: CreateUserDto) {
		return this.userModel.create(createUserDto);
	}

	findAll() {
		return this.userModel.findAll({ include: { all: true } });
	}
	findByEmail(email: string) {
		return this.userModel.findOne({ where: { email } });
	}

	findOne(id: number) {
		return this.userModel.findByPk(id, { include: { all: true } });
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return this.userModel.update(updateUserDto, { where: { id } });
	}

	remove(id: number) {
		return this.userModel.destroy({ where: { id } });
	}
}
