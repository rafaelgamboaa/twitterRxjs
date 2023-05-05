import { Subject } from "rxjs";

export class followManager {
    subject$ = new Subject();

    getFollow() {
        return this.subject$.asObservable();
    }

    setFollow(value) {
        this.subject$.next(value);
    }
}