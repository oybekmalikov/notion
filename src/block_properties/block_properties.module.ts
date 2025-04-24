import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BlockPropertiesController } from "./block_properties.controller";
import { BlockPropertiesService } from "./block_properties.service";
import { BlockProperty } from "./models/block_property.model";

@Module({
	imports: [SequelizeModule.forFeature([BlockProperty])],
	controllers: [BlockPropertiesController],
	providers: [BlockPropertiesService],
})
export class BlockPropertiesModule {}
