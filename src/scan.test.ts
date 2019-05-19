import {scan} from "rxjs/operators";
import {of} from "rxjs";

it("should total up", () => {

    of(1,2,3,4,5,6,7,8,9,10).pipe(
        scan((acc, value) => acc + value)
    ).subscribe(val => console.log(val));

});
