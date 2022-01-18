const sentence = "Boil 'em, mash 'em, stick 'em in a stew!";

const spelledOut = (phrase) => {
  let time = 500;
  for (const char of phrase) {
    setTimeout(() => {process.stdout.write(char)}, time)
    time += 100;
  }
  setTimeout(() => {process.stdout.write('\n')}, 4500);
}
spelledOut(sentence);