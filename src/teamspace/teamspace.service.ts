import { Injectable } from '@nestjs/common';
import { CreateTeamspaceDto } from './dto/create-teamspace.dto';
import { UpdateTeamspaceDto } from './dto/update-teamspace.dto';

@Injectable()
export class TeamspaceService {
  create(createTeamspaceDto: CreateTeamspaceDto) {
    return 'This action adds a new teamspace';
  }

  findAll() {
    return `This action returns all teamspace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamspace`;
  }

  update(id: number, updateTeamspaceDto: UpdateTeamspaceDto) {
    return `This action updates a #${id} teamspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamspace`;
  }
}
