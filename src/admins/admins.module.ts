import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminsController } from "./admins.controller";
import { AdminsService } from "./admins.service";
import { Admin } from "./models/admin.model";

@Module({
	imports: [SequelizeModule.forFeature([Admin])],
	controllers: [AdminsController],
	providers: [AdminsService],
	exports:[AdminsService]
})
export class AdminsModule {}
