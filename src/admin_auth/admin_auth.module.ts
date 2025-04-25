import { Module } from "@nestjs/common";
import { AdminAuthController } from "./admin_auth.controller";
import { AdminAuthService } from "./admin_auth.service";
import { JwtModule } from '@nestjs/jwt'

@Module({
	imports: [
		JwtModule .register({
			global: true,
			secret: process.env.SECRET_KEY,
			signOptions: { expiresIn: process.env.SECRET_TIME },
		}),
	],
	controllers: [AdminAuthController],
	providers: [AdminAuthService],
})
export class AdminAuthModule {}
