// calling the same function inside itself is called recursion

// question : 1

// printing fizz buzz using recursion

function fizzbuzz(srt, end) {
  if (srt > end) {
    return;
  }

  if (srt % 3 == 0 && srt % 5 == 0) {
    console.log("FIZZ-BUZZ " + srt);
  } else if (srt % 3 == 0) {
    console.log("FIZZ " + srt);
  } else if (srt % 5 == 0) {
    console.log("BUZZ " + srt);
  }

  fizzbuzz(++srt, end);
}

fizzbuzz(1, 15);
