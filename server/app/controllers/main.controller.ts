import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { Observable } from "rxjs/Observable";

@Controller()
export class MainController {

    @MessagePattern({ cmd: "LIST_USERS" })
    private listUsers(): Observable<Object> {
        return Observable.fromPromise(new Promise((resolve, reject) => {
            // compute the result and send it back
            resolve("test");
        }));
    }
}
