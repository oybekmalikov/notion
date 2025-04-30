import { Injectable } from '@nestjs/common';
import { CreateWorkspaceMemberDto } from './dto/create-workspace_member.dto';
import { UpdateWorkspaceMemberDto } from './dto/update-workspace_member.dto';

@Injectable()
export class WorkspaceMembersService {
  create(createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
    return 'This action adds a new workspaceMember';
  }

  findAll() {
    return `This action returns all workspaceMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspaceMember`;
  }

  update(id: number, updateWorkspaceMemberDto: UpdateWorkspaceMemberDto) {
    return `This action updates a #${id} workspaceMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspaceMember`;
  }
}
