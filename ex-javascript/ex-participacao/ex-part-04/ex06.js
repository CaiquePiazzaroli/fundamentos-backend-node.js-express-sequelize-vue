const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay().then(() => {console.log("1s");});
  await delay().then(() => {console.log("2s");});
  await delay().then(() => {console.log("3s");});
}


umPorSegundo();
