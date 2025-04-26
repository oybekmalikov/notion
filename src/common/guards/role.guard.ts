import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../../app.constants";
@Injectable()
export class RoleGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const requiredRoles = this.reflector.getAllAndOverride<string[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()]
		);
		if (!requiredRoles) {
			return true;
		}
		const role = request.user.role;
		const permission = role.some((rol: any) => requiredRoles.includes(rol));
		if (!permission) {
			throw new ForbiddenException({
				message: "role not allowed",
			});
		}
		return true;
	}
}
