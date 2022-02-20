import { CanActivate, ExecutionContext } from "@nestjs/common";

export class TestGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean{
        console.log("context", context)
        return false
    }
}