function firstPromise(numInt) {
  return new Promise((resolve, reject) => {
    if (numInt > 2) {
      resolve(numInt);
    } else {
      reject(new Error("Value argument less than 2"));
    }
  });
}

function secondPromise(data) {
  return new Promise((resolve, reject) => {
    if ((data + 1) % 2 == 0) {
      resolve(data);
    } else {
      reject(new Error("data + 1 is not pair"));
    }
  });
}

firstPromise(14)
  .then((value) =>
    secondPromise(value)
      .then((value2) => console.log(value2))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));
