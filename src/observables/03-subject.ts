import { Observable, Observer, Subject } from "rxjs";

const obsever: Observer<any> = {
  next: value => console.log("next:", value),
  error: error => console.warn("error:", error),
  complete: () => console.info("completado")
};

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 3000);

  return () => clearInterval(intervalID);
});

/**
 * 1 Casteo multiple
 * 2 It also an observer
 * 3 next, error, complete
 *
 */

const subject$ = new Subject();

intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(rnd => console.log("subs1", rnd));
const subs2 = subject$.subscribe(rnd => console.log("subs2", rnd));

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
}, 3500);
