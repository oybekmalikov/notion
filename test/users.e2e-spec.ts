import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("User (e2e)", () => {
	let app: INestApplication;
	let token: string;
	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();
		app = moduleFixture.createNestApplication();
		app.useGlobalPipes(new ValidationPipe());
		await app.init();
		const response = await request(app.getHttpServer())
			.post("/auth/sign-in")
			.send({
				email: "admin10@example.com",
				password: "12345678M@#!ls",
				value: "admin",
			});
		token = response.body.token;
		console.log("token:", token);
	});
	it("/users (GET) --> 200 OK", () => {
		return request(app.getHttpServer())
			.get("/users")
			.set("Authorization", `Bearer ${token}`)
			.expect("Content-Type", /json/)
			.expect(200);
	});
	it("/users (GET) --> 401 'UnAuthorized' error", () => {
		return (
			request(app.getHttpServer())
				.get("/users")
				// .set("Authorization", `Bearer ${token}`)
				.expect("Content-Type", /json/)
				.expect(401)
		);
	});
	// it("/auth/sign-up (Post) --> 201", async () => {
	// 	return request(app.getHttpServer())
	// 		.post("/auth/sign-up")
	// 		.send({
	// 			name: "amdin10",
	// 			email: "admin101@example.com",
	// 			password: "12345678M@#!ls",
	// 			value: "admin",
	// 		})
	// 		.expect("Content-Type", /json/)
	// 		.expect(201);
	// });

	// it("/auth/sign-up (Post) --> 201", async () => {
	// 	return request(app.getHttpServer())
	// 		.post("/auth/sign-up")
	// 		.send({
	// 			name: "amdin10",
	// 			email: "admin101@example.com",
	// 			password: "12345678M@#!ls",
	// 			value: "admin",
	// 		})
	// 		.expect("Content-Type", /json/)
	// 		.expect(400)
	// 		.expect({
	// 			message: "Email already exists",
	// 			error: "Bad Request",
	// 			statusCode: 400,
	// 		});
	// });

	it("/auth/sign-up (Post) --> 201", async () => {
		return request(app.getHttpServer())
			.post("/auth/sign-up")
			.send({
				name: "amdin10",
				email: "admin105@example.com",
				password: "12345678",
				value: "admin",
			})
			.expect("Content-Type", /json/)
			.expect(400)
			.expect({
				message: ["Password kuchli emas"],
				error: "Bad Request",
				statusCode: 400,
			});
	});
	afterAll(async () => {
		await app.close();
	});
});
