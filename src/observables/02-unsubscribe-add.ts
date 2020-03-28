import { Observable, Observer } from "rxjs";

const obsever: Observer<any> = {
  next: value => console.log("next:", value),
  error: error => console.warn("error:", error),
  complete: () => console.info("completado")
};

const interval$ = new Observable<number>(subs => {
  let count = 1;
  //Create counter
  const interval = setInterval(() => {
    count = count + 1;
    subs.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("stop interval");
  };
});

const subsInterval1 = interval$.subscribe(obsever);
const subsInterval2 = interval$.subscribe(obsever);
const subsInterval3 = interval$.subscribe(obsever);

subsInterval1.add(subsInterval2).add(subsInterval3);

setTimeout(() => {
  subsInterval1.unsubscribe();
}, 5000);
