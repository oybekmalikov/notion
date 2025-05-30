import { Injectable } from '@nestjs/common';
import { CreateGroupMemberDto } from './dto/create-group_member.dto';
import { UpdateGroupMemberDto } from './dto/update-group_member.dto';

@Injectable()
export class GroupMemberService {
  create(createGroupMemberDto: CreateGroupMemberDto) {
    return 'This action adds a new groupMember';
  }

  findAll() {
    return `This action returns all groupMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupMember`;
  }

  update(id: number, updateGroupMemberDto: UpdateGroupMemberDto) {
    return `This action updates a #${id} groupMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupMember`;
  }
}
