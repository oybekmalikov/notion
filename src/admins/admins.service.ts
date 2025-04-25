import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./models/admin.model";

@Injectable()
export class AdminsService {
	constructor(@InjectModel(Admin) private readonly adminMode: typeof Admin) {}
	create(createAdminDto: CreateAdminDto) {
		return this.adminMode.create(createAdminDto);
	}

	findAll() {
		return this.adminMode.findAll({ include: { all: true } });
	}

	findOne(id: number) {
		return this.adminMode.findByPk(id, { include: { all: true } });
	}

	update(id: number, updateAdminDto: UpdateAdminDto) {
		return this.adminMode.update(updateAdminDto, { where: { id } });
	}

	remove(id: number) {
		return this.adminMode.destroy({ where: { id } });
	}
	findByEmail(email: string) {
		return this.adminMode.findOne({ where: { email } });
	}
}
