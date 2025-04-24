import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Propety } from "./models/propety.models";
import { PropetiesController } from "./propeties.controller";
import { PropetiesService } from "./propeties.service";

@Module({
	imports: [SequelizeModule.forFeature([Propety])],
	controllers: [PropetiesController],
	providers: [PropetiesService],
})
export class PropetiesModule {}
