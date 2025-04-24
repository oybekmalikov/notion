import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BlocksController } from "./blocks.controller";
import { BlocksService } from "./blocks.service";
import { Block } from "./models/block.model";

@Module({
	imports: [SequelizeModule.forFeature([Block])],
	controllers: [BlocksController],
	providers: [BlocksService],
})
export class BlocksModule {}
