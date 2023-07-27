export const WordFlip = (event: any) => {
  const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: any = null;
  let iterations = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter: any, index: number) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 36)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);

    iterations += 1 / 3;
  }, 30);
};
