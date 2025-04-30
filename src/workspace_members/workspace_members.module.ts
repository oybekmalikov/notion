import { Module } from '@nestjs/common';
import { WorkspaceMembersService } from './workspace_members.service';
import { WorkspaceMembersController } from './workspace_members.controller';

@Module({
  controllers: [WorkspaceMembersController],
  providers: [WorkspaceMembersService],
})
export class WorkspaceMembersModule {}
