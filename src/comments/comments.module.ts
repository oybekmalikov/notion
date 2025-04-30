import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import { Comment } from "./models/comment.model";

@Module({
	imports: [SequelizeModule.forFeature([Comment])],
	controllers: [CommentsController],
	providers: [CommentsService],
})
export class CommentsModule {}
