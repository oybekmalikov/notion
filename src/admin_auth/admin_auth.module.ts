import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AdminsModule } from "../admins/admins.module";
import { AdminAuthController } from "./admin_auth.controller";
import { AdminAuthService } from "./admin_auth.service";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		AdminsModule,
		JwtModule.register({
			secret: process.env.SECRET_KEY,
			signOptions: { expiresIn: process.env.SECRET_TIME },
			global: true,
		}),
	],
	controllers: [AdminAuthController],
	providers: [AdminAuthService],
})
export class AdminAuthModule {}
