import { Observable, Observer } from "rxjs";

const obsever: Observer<any> = {
  next: value => console.log("siguiente [next]", value),
  error: error => console.warn("error [obs]: ", error),
  complete: () => console.info("completado")
};

const obs$ = new Observable<string>(subs => {
  subs.next("Hello");
  subs.next("World");

  //SEND ERROR
  //subs.error("se mando el error");

  subs.complete();
});

obs$.subscribe(obsever);
