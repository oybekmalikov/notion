import { Module } from '@nestjs/common';
import { TeamspaceService } from './teamspace.service';
import { TeamspaceController } from './teamspace.controller';

@Module({
  controllers: [TeamspaceController],
  providers: [TeamspaceService],
})
export class TeamspaceModule {}
