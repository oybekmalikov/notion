import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamspaceService } from './teamspace.service';
import { CreateTeamspaceDto } from './dto/create-teamspace.dto';
import { UpdateTeamspaceDto } from './dto/update-teamspace.dto';

@Controller('teamspace')
export class TeamspaceController {
  constructor(private readonly teamspaceService: TeamspaceService) {}

  @Post()
  create(@Body() createTeamspaceDto: CreateTeamspaceDto) {
    return this.teamspaceService.create(createTeamspaceDto);
  }

  @Get()
  findAll() {
    return this.teamspaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamspaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamspaceDto: UpdateTeamspaceDto) {
    return this.teamspaceService.update(+id, updateTeamspaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamspaceService.remove(+id);
  }
}
