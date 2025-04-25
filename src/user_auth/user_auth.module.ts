import { Module } from "@nestjs/common";
import { UsersModule } from "../users/users.module";
import { UserAuthController } from "./user_auth.controller";
import { UserAuthService } from "./user_auth.service";

@Module({
	imports: [UsersModule],
	controllers: [UserAuthController],
	providers: [UserAuthService],
})
export class UserAuthModule {}
