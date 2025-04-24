import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePropetyDto } from "./dto/create-propety.dto";
import { UpdatePropetyDto } from "./dto/update-propety.dto";
import { Propety } from "./models/propety.models";

@Injectable()
export class PropetiesService {
	constructor(
		@InjectModel(Propety) private readonly propertyModel: typeof Propety
	) {}
	create(createPropetyDto: CreatePropetyDto) {
		return this.propertyModel.create(createPropetyDto);
	}

	findAll() {
		return this.propertyModel.findAll({ include: { all: true } });
	}

	findOne(id: number) {
		return this.propertyModel.findByPk(id, { include: { all: true } });
	}

	update(id: number, updatePropetyDto: UpdatePropetyDto) {
		return this.propertyModel.update(updatePropetyDto, { where: { id } });
	}

	remove(id: number) {
		return this.propertyModel.destroy({ where: { id } });
	}
}
