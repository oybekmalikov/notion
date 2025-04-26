import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
	try {
		const PORT = process.env.PORT || 3030;
		const app = await NestFactory.create(AppModule);
		app.useGlobalPipes(new ValidationPipe());
		const config = new DocumentBuilder()
			.setTitle("Notion in NestJS")
			.setDescription("Notion RESRT API")
			.setVersion("1.0")
			.addTag("NestJS", "Swagger")
			.addBearerAuth()
			.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup("docs", app, document);
		await app.listen(PORT, () => {
			console.log("Server started on http://localhost:" + PORT);
		});
	} catch (error) {
		console.log(error);
	}
}
start();
