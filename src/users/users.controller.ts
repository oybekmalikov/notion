import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../common/guards/auth.guard";
import { SelfGuard } from "../common/guards/self.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@UseGuards(AuthGuard)
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}
	@UseGuards(AuthGuard)
	@Get()
	findAll() {
		return this.usersService.findAll();
	}
	@UseGuards(SelfGuard)
	@UseGuards(AuthGuard)
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.usersService.findOne(+id);
	}
	@UseGuards(SelfGuard)
	@UseGuards(AuthGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto);
	}
	@UseGuards(SelfGuard)
	@UseGuards(AuthGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.usersService.remove(+id);
	}
}
