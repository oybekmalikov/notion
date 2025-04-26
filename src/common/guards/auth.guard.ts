import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const authHeader = request.headers.authorization;
		if (!authHeader) {
			throw new UnauthorizedException("Authorization token not given");
		}
		const [bearer, token] = authHeader.split(" ");
		if (bearer !== "Bearer" || !token) {
			throw new UnauthorizedException({ message: "Invalid bearer or token" });
		}
		try {
			const payload = this.jwtService.verify(token);
			request.user = payload;
			return true;
		} catch (error) {
			throw new UnauthorizedException({
				message: "Token expired or Invalid Signature",
				error,
			});
		}
	}
}
