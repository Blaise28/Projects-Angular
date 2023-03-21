import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiKeyInterceptor } from "./httpInterceptors/api-key.interceptor";

export const ExerciceInterceptorProviders =[
    {provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor,multi:true}
]
