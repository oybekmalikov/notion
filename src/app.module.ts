import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { BlockPropertiesModule } from "./block_properties/block_properties.module";
import { BlockProperty } from "./block_properties/models/block_property.model";
import { BlocksModule } from "./blocks/blocks.module";
import { Block } from "./blocks/models/block.model";
import { Propety } from "./propeties/models/propety.models";
import { PropetiesModule } from "./propeties/propeties.module";
import { Type } from "./types/models/type.model";
import { TypesModule } from "./types/types.module";

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
			models: [Type, Propety, BlockProperty, Block],
			autoLoadModels: true,
			sync: { alter: true },
			logging: false,
		}),
		TypesModule,
		PropetiesModule,
		BlockPropertiesModule,
		BlocksModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
