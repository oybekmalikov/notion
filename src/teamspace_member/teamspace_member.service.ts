import { Injectable } from '@nestjs/common';
import { CreateTeamspaceMemberDto } from './dto/create-teamspace_member.dto';
import { UpdateTeamspaceMemberDto } from './dto/update-teamspace_member.dto';

@Injectable()
export class TeamspaceMemberService {
  create(createTeamspaceMemberDto: CreateTeamspaceMemberDto) {
    return 'This action adds a new teamspaceMember';
  }

  findAll() {
    return `This action returns all teamspaceMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamspaceMember`;
  }

  update(id: number, updateTeamspaceMemberDto: UpdateTeamspaceMemberDto) {
    return `This action updates a #${id} teamspaceMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamspaceMember`;
  }
}
