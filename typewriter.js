const sentence = "hello there from lighthouse labs";
let count = 500;
for (let i = 0; i < sentence.length; i++) {
  setTimeout((count) => {
    if (i !== sentence.length - 1) {
      process.stdout.write(sentence[i]);
    } else {
      process.stdout.write(sentence[i]+ "\n");
    }
  }, (count += 500));
}
