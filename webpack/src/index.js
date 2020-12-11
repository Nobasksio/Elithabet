import Counter from "./counter.js";

const cnt = new Counter(10);
console.log( cnt.getCounter() );
cnt.increment();
cnt.increment();
console.log( cnt.getCounter() );
