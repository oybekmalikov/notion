import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminAuthModule } from "./admin_auth/admin_auth.module";
import { AdminsModule } from "./admins/admins.module";
import { Admin } from "./admins/models/admin.model";
import { BlockPropertiesModule } from "./block_properties/block_properties.module";
import { BlockProperty } from "./block_properties/models/block_property.model";
import { BlocksModule } from "./blocks/blocks.module";
import { Block } from "./blocks/models/block.model";
import { CommentsModule } from "./comments/comments.module";
import { Comment } from "./comments/models/comment.model";
import { Propety } from "./propeties/models/propety.models";
import { PropetiesModule } from "./propeties/propeties.module";
import { Type } from "./types/models/type.model";
import { TypesModule } from "./types/types.module";
import { UserAuthModule } from "./user_auth/user_auth.module";
import { User } from "./users/models/user.model";
import { UsersModule } from "./users/users.module";
import { PermissionModule } from './permission/permission.module';
import { DevicesModule } from './devices/devices.module';
import { GroupMemberModule } from './group_member/group_member.module';
import { GroupsModule } from './groups/groups.module';
import { WorkspaceMembersModule } from './workspace_members/workspace_members.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { TeamspaceModule } from './teamspace/teamspace.module';
import { TeamspaceMemberModule } from './teamspace_member/teamspace_member.module';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		SequelizeModule.forRoot({
			dialect: "postgres",
			host: process.env.PG_HOST,
			port: Number(process.env.PG_PORT),
			username: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DB,
			models: [Type, Propety, BlockProperty, Block, User, Admin, Comment],
			autoLoadModels: true,
			sync: { alter: true },
			logging: false,
		}),
		TypesModule,
		PropetiesModule,
		BlockPropertiesModule,
		BlocksModule,
		UsersModule,
		AdminsModule,
		AdminAuthModule,
		UserAuthModule,
		CommentsModule,
		PermissionModule,
		DevicesModule,
		GroupMemberModule,
		GroupsModule,
		WorkspaceMembersModule,
		WorkspacesModule,
		TeamspaceModule,
		TeamspaceMemberModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
