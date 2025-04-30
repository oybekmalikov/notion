import { Module } from '@nestjs/common';
import { GroupMemberService } from './group_member.service';
import { GroupMemberController } from './group_member.controller';

@Module({
  controllers: [GroupMemberController],
  providers: [GroupMemberService],
})
export class GroupMemberModule {}
