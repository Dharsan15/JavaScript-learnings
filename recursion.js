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

// Question : 2
// find a string is palindrome or not by using recursion

function palindrome(str) {
  if (str.length == 0) return true;
  if (str.length == 1) return true;
  if (str.length == 2) return str[0] == str[1];
  if (str[0] != str[str.length - 1]) return false;

  return palindrome(str.substring(1, str.length - 1));
}

console.log(palindrome("mom"));

// Question : 3
// flatten an array with nesting

function flatten(arr) {
  const result = [];

  for (const elements of arr) {
    if (arr.isArray()) {
      const flattened = flatten(arr);

      for (const innerelement of flattened) {
        result.push(innerelement);
      }
    } else {
      result.push(elements);
    }
  }

  return result;
}


// Question : 3

// flatten an object 
// convert nested objects to a single object

