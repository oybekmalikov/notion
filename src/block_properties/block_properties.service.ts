import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateBlockPropertyDto } from "./dto/create-block_property.dto";
import { UpdateBlockPropertyDto } from "./dto/update-block_property.dto";
import { BlockProperty } from "./models/block_property.model";

@Injectable()
export class BlockPropertiesService {
	constructor(
		@InjectModel(BlockProperty)
		private readonly blockPropertyModel: typeof BlockProperty
	) {}
	create(createBlockPropertyDto: CreateBlockPropertyDto) {
		return this.blockPropertyModel.create(createBlockPropertyDto);
	}

	findAll() {
		return this.blockPropertyModel.findAll({ include: { all: true } });
	}

	findOne(id: number) {
		return this.blockPropertyModel.findByPk(id, { include: { all: true } });
	}

	update(id: number, updateBlockPropertyDto: UpdateBlockPropertyDto) {
		return this.blockPropertyModel.update(updateBlockPropertyDto, {
			where: { id },
		});
	}

	remove(id: number) {
		return this.blockPropertyModel.destroy({ where: { id } });
	}
}
