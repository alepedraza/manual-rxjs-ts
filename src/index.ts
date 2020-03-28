import { asyncScheduler } from "rxjs";

//setTimeout(()=>{},3000);
//setInterval(()=>{},3000);

const saludar = () => console.log("Hola Mundo");

asyncScheduler.schedule(saludar, 1000);
