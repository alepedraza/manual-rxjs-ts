import { range, asyncScheduler } from "rxjs";

// const src$ = of(1,2,3,4,5);

/**
 * segundo parametro son el número de emisiones
 * asyncScheduler es para volver el obs en asincrono
 */
const src$ = range(1, 5, asyncScheduler);

console.log("init");
src$.subscribe(console.log);
console.log("end");
