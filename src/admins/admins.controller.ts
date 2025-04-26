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
import { Roles } from "../common/decorators/roles-auth.decorator";
import { AuthGuard } from "../common/guards/auth.guard";
import { SelfGuard } from "../common/guards/self.guard";
import { RoleGuard } from "./../common/guards/role.guard";
import { AdminsService } from "./admins.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Controller("admins")
export class AdminsController {
	constructor(private readonly adminsService: AdminsService) {}
	@Roles("superadmin")
	@UseGuards(RoleGuard)
	@UseGuards(AuthGuard)
	@Post()
	create(@Body() createAdminDto: CreateAdminDto) {
		return this.adminsService.create(createAdminDto);
	}
	@Roles("superadmin")
	@UseGuards(RoleGuard)
	@UseGuards(AuthGuard)
	@Get()
	findAll() {
		return this.adminsService.findAll();
	}
	@Roles("superadmin", "admin")
	@UseGuards(RoleGuard)
	@UseGuards(SelfGuard)
	@UseGuards(AuthGuard)
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.adminsService.findOne(+id);
	}
	@Roles("superadmin", "admin")
	@UseGuards(RoleGuard)
	@UseGuards(SelfGuard)
	@UseGuards(AuthGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
		return this.adminsService.update(+id, updateAdminDto);
	}
	@Roles("superadmin", "admin")
	@UseGuards(RoleGuard)
	@UseGuards(SelfGuard)
	@UseGuards(AuthGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.adminsService.remove(+id);
	}
}
