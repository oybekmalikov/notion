import { Module } from '@nestjs/common';
import { TeamspaceMemberService } from './teamspace_member.service';
import { TeamspaceMemberController } from './teamspace_member.controller';

@Module({
  controllers: [TeamspaceMemberController],
  providers: [TeamspaceMemberService],
})
export class TeamspaceMemberModule {}
