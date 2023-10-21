let promiseOne = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("promise one resolved");
    res(20);
  }, 2000);
});

promiseOne.then((data) => {
  console.log(data);
});
