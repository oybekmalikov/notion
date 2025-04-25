import { Module } from '@nestjs/common';
import { UserAuthService } from './user_auth.service';
import { UserAuthController } from './user_auth.controller';

@Module({
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {}
