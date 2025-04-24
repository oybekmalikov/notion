import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { Block } from "./models/block.model";

@Injectable()
export class BlocksService {
	constructor(@InjectModel(Block) private readonly blockModel: typeof Block) {}
	create(createBlockDto: CreateBlockDto) {
		return this.blockModel.create(createBlockDto);
	}

	findAll() {
		return this.blockModel.findAll({ include: { all: true } });
	}

	findOne(id: number) {
		return this.blockModel.findByPk(id, { include: { all: true } });
	}

	update(id: number, updateBlockDto: UpdateBlockDto) {
		return this.blockModel.update(updateBlockDto, { where: { id } });
	}

	remove(id: number) {
		return this.blockModel.destroy({ where: { id } });
	}
}
