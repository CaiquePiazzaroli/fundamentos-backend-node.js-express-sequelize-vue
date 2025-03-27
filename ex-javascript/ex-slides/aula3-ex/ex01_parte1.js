import fs from "node:fs";

const doSomething = () => fs.readFileSync("arquivo_exemplo.txt", "utf-8");
export default function measureDoingSomething() {
  console.log("Sync");
  console.time('doSomething()');
  // do something, and measure the time it takes
  doSomething();
  console.timeEnd('doSomething()');
};

//measureDoingSomething();