import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class SelfGuard implements CanActivate {
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		if (request.user.role.includes("superadmin")) {
			return true;
		}
		if (request.user.id != request.params.id) {
			throw new ForbiddenException({
				message: "You are not allowed to access this data",
			});
		}
		return true;
	}
}
