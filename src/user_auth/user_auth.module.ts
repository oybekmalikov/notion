import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { UserAuthController } from "./user_auth.controller";
import { UserAuthService } from "./user_auth.service";

@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		JwtModule.register({
			secret: process.env.SECRET_KEY,
			signOptions: { expiresIn: process.env.SECRET_TIME },
			global: true,
		}),
	],
	controllers: [UserAuthController],
	providers: [UserAuthService],
})
export class UserAuthModule {}
