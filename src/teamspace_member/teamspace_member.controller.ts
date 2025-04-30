import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamspaceMemberService } from './teamspace_member.service';
import { CreateTeamspaceMemberDto } from './dto/create-teamspace_member.dto';
import { UpdateTeamspaceMemberDto } from './dto/update-teamspace_member.dto';

@Controller('teamspace-member')
export class TeamspaceMemberController {
  constructor(private readonly teamspaceMemberService: TeamspaceMemberService) {}

  @Post()
  create(@Body() createTeamspaceMemberDto: CreateTeamspaceMemberDto) {
    return this.teamspaceMemberService.create(createTeamspaceMemberDto);
  }

  @Get()
  findAll() {
    return this.teamspaceMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamspaceMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamspaceMemberDto: UpdateTeamspaceMemberDto) {
    return this.teamspaceMemberService.update(+id, updateTeamspaceMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamspaceMemberService.remove(+id);
  }
}
