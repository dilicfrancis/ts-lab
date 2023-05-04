import { BehaviorSubject, Subject, fromEvent, map } from "rxjs";

const emitButton = document.querySelector("button#emit");
const inputElement: HTMLInputElement = document.querySelector("#value-input");
const subscribeButton = document.querySelector("button#subscribe");

// const emission$ = new Subject<string>();
const emission$ = new BehaviorSubject<string>("started");

fromEvent(emitButton, "click")
  .pipe(map(() => inputElement.value))
  .subscribe(emission$);

// fromEvent(emitButton, "click").subscribe(() =>
//   emission$.next(inputElement.value)
// );

fromEvent(subscribeButton, "click").subscribe(() => {
  emission$.subscribe((input) => console.log(input));
});

// emission$.next("ready");

// emission$.subscribe((res) => {
//   console.log(res);
// });

// const subscriber = () => {
//   emission$.subscribe((value) => console.log(value));
//   emission$.next("new ready");
// };

// subscriber();

// emission$.next("another");

// import { Observable, concatMap, from } from "rxjs";

// const source$ = new Observable<string>((subscriber) => {
//   setTimeout(() => subscriber.next("X"), 1000);
//   setTimeout(() => subscriber.next("Y"), 2000);
// });

// source$
//   .pipe(
//     concatMap((notification) => {
//       if (notification === "X") return from([7]);
//       else return from([8]);
//     })
//   )
//   .subscribe((result) => console.log(result));

// import { combineLatest, forkJoin, interval, of, timer } from "rxjs";
// import { ajax } from "rxjs/ajax";

// const person = ajax<{ name_with_initials: string }>(
//   "https://random-data-api.com/api/name/random_name"
// );
// const language = ajax<{ language: string }>(
//   "https://random-data-api.com/api/nation/random_nation"
// );
// const recipe = ajax<{ description: string }>(
//   "https://random-data-api.com/api/food/random_food"
// );

// forkJoin([person, language, recipe]).subscribe((res) =>
//   console.log(
//     `${res[0].response.name_with_initials} speaks ${res[1].response.language}, and loves ${res[2].response.description}`
//   )
// );

// forkJoin([of("ABC"), timer(1000)]).subscribe((res) => console.log(res));
// combineLatest([of("ABC"), interval(1000)]).subscribe((res) => console.log(res));

// import { interval, Observable } from "rxjs";

// interval(3000)
//   .subscribe((value) => console.log(value))
//   .unsubscribe();

// new Observable<number>((subscriber) => {
//   let increment = 0;

//   const interval = setInterval(() => {
//     increment++;
//     subscriber.next(increment);
//     console.log(increment);
//   }, 2000);

//   return () => {
//     clearInterval(interval);
//   };
// })
//   .subscribe((value) => console.log(value))
//   .unsubscribe();

// import { Observable, timer } from "rxjs";

// const subscription = timer(1500).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("complete"),
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 600);

// const customSubscription = new Observable((subscribe) => {
//   const time = setTimeout(() => {
//     subscribe.next(0);
//     subscribe.complete();
//     console.log("complete");
//   }, 1500);

//   return () => {
//     clearTimeout(time);
//   };
// })
//   .subscribe({
//     next: (value) => console.log(value),
//     complete: () => console.log("done"),
//   })
//   .unsubscribe();

// import { fromEvent, Observable } from "rxjs";

// const buttonTrigger = document.querySelector("button#click");

// fromEvent<MouseEvent>(buttonTrigger, "click")
//   .subscribe((event) => console.log(event.type, event.x, event.y))
//   .unsubscribe();

// new Observable<MouseEvent>((subscriber) => {
//   const clickHandler = (event: MouseEvent) => {
//     subscriber.next(event);
//   };
//   buttonTrigger.addEventListener("click", clickHandler);

//   return () => {
//     buttonTrigger.removeEventListener("click", clickHandler);
//   };
// }).subscribe((event) => console.log(event.type, event.x, event.y));

// import { from } from "rxjs";

// from(["lo", "fi", "hi"]).subscribe((value) => console.log(value));

// const promise = async (params: number) => {
//   await setTimeout(() => "time", 1000);
//   //throw new Error("oops!");
//   return params;
// };

// //console.log(promise(2).then((res) => console.log(res)));

// from(promise(3)).subscribe({
//   next(value) {
//     console.log(value);
//   },
//   complete() {
//     console.log("done");
//   },
//   error(err) {
//     //console.log(err);
//   },
// });

// import { Observable, of } from "rxjs";

// of(3, true, "go").subscribe({
//   next(value) {
//     console.log(value);
//   },
//   complete() {
//     console.log("done");
//   },
// });

// export const customOf = (...arg: any) => {
//   return new Observable<any>((subscriber) => {
//     for (let i = 0; i < arg.length; i++) {
//       subscriber.next(arg[i]);
//     }
//     subscriber.complete();
//   });
// };

// customOf("here", true, 34).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("custom is done"),
// });

// import { Observable } from "rxjs";

// const clickBtn = document.querySelector("button#click");

// const clickObserver = new Observable<MouseEvent>((subscriber) => {
//   console.log("cold run");

//   clickBtn.addEventListener("click", (e: MouseEvent) => {
//     subscriber.next(e);
//   });
// });

// clickObserver.subscribe((value) => console.log(value.x));
// setTimeout(
//   () => clickObserver.subscribe((value) => console.log("delayed:", value.y)),
//   5000
// );

// import { ajax } from "rxjs/ajax";

// const observer = ajax("https://random-data-api.com/api/name/random_name");
// observer.subscribe((value) => console.log(value.response));
// observer.subscribe((value) => console.log(value.response));

// import { Observable } from "rxjs";

// const observer = new Observable<boolean>((subscriber) => {
//   subscriber.next(false);
//   setTimeout(() => subscriber.next(true), 3000);
// });

// observer.subscribe((value) => console.log(value));

// setTimeout(
//   () => observer.subscribe((value) => console.log("delayed", value)),
//   2000
// );

// import { Observable } from "rxjs";

// const observable = new Observable<number>((subscriber) => {
//   let value = 0;
//   const interval = setInterval(() => subscriber.next(++value), 1000);

//   return () => clearInterval(interval);
// });

// const subscription = observable.subscribe((res) => console.log(res));

// setTimeout(() => subscription.unsubscribe(), 7000);

// import { Observable, TimeoutError } from "rxjs";

// new Observable<boolean>((subscriber) => {
//   let timeout: ReturnType<typeof setTimeout>[] = [];
//   subscriber.next(false);
//   timeout.push(setTimeout(() => subscriber.next(false), 2000));
//   // subscriber.complete();
//   timeout.push(setTimeout(() => subscriber.next(true), 1000));
//   // subscriber.error("err");

//   return () => {
//     for (let i = 0; i < timeout.length; i++) {
//       clearTimeout(timeout[i]);
//       console.log("clearing...");
//     }
//     //quick reset of the timer array you just cleared
//     timeout = [];
//     console.log("teardown");
//   };
// })
//   .subscribe({
//     next: (res) => console.log(res),
//     complete: () => console.log("done"),
//     error: () => console.log("error"),
//   })
//   .unsubscribe();

// import { Observable } from "rxjs";

// new Observable<number>((subscriber) => subscriber.next(5)).subscribe((value) =>
//   console.log(value)
// );

// import { Observable } from "rxjs";

// new Observable((subscriber) => console.log("no emissions")).subscribe();

// import { Observable } from "rxjs";

// const observer = new Observable<string>((subscriber) => {
//   subscriber.next("string 1"),
//     subscriber.next("string 2"),
//     subscriber.next("string 3");

//   setTimeout(() => {
//     return subscriber.next("string 4");
//   }, 1000);
// });

// const subscription = observer.subscribe({
//   next: (result) => console.log(result),
// });

// setTimeout(() => {
//   return subscription.unsubscribe();
// }, 999);

// import { Observable } from 'rxjs';

// const someObservable$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// someObservable$.subscribe(value => console.log(value));
