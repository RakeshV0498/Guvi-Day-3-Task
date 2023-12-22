//1.Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 18, 19];

//Anonymous Function
var PrintOdd = function (num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      console.log(num[i]);
    }
  }
};

PrintOdd(numbers);

//IIFE Function

(function (n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      console.log(n[i]);
    }
  }
})(numbers);

//2.Convert all the strings to title caps in a string array

const strings = ["apple", "ball", "cat"];

//annonymous function

const toucase = strings.map(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(toucase);

//IIFE Function

(function (arr) {
  const titleCaseArray = arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  console.log(titleCaseArray);
})(strings);

//3.Sum of all numbers in an array

//annonymous function

const numarr = [1, 2, 3, 4];

const sumarr = function () {
  let sum = 0;
  numarr.forEach(function (num) {
    sum += num;
  });
  return sum;
};

console.log(sumarr());

//IIFE Function

const sumarr1 = (function () {
  let sum = 0;
  numarr.forEach(function (num) {
    sum += num;
  });
  return sum;
})();

console.log(sumarr1);

//4.Return all the prime numbers in an array

//annonymous function

var primenum = [2, 3, 5, 7, 11, 13, 17, 19, 23];

var FindPrime = (function (array) {
  array.forEach(function (num) {
    if (
      (function (num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      })(num)
    ) {
      console.log(num);
    }
  });
})(primenum);

console.log(FindPrime);

//IIFE fucntion
(function (array) {
  array.forEach(function (num) {
    if (
      (function (num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      })(num)
    ) {
      console.log(num);
    }
  });
})(primenum);

//5.Return all the palindromes in an array

//Annonymous Fucntion

var words = ["level", "hello", "radar", "world", "deed"];

var palindromes = (function (arr) {
  return arr.filter(function (word) {
    var cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanWord === cleanWord.split("").reverse().join("");
  });
})(words);

console.log(palindromes);

//IIFE function

var palindromes = (function (arr) {
  return arr.filter(function (word) {
    var cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanWord === cleanWord.split("").reverse().join("");
  });
})(words);

console.log(palindromes);

//6. Return median of two sorted arrays of the same size.

//Annonymous Function

var findMedian = function (arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var sortedArray = mergedArray.sort((a, b) => a - b);

  var length = sortedArray.length;
  var mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    return sortedArray[mid];
  }
};

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

console.log(findMedian(array1, array2));

//IIFE Function

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var median = (function (arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var sortedArray = mergedArray.sort((a, b) => a - b);

  var length = sortedArray.length;
  var mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    return sortedArray[mid];
  }
})(array1, array2);

console.log(median);

// 7.Remove duplicates from an array

//Annonymous Function

var removeDuplicates = function (arr) {
  return Array.from(new Set(arr));
};

var originalArray = [1, 2, 2, 3, 4, 4, 5];

var newArray = removeDuplicates(originalArray);

console.log(newArray);

//IIFE Function

var originalArray = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = (function (arr) {
  return Array.from(new Set(arr));
})(originalArray);

console.log(uniqueArray);

//8.Rotate an array by k times

//Annonymous Function

var rotateArray = function (arr, k) {
  // Ensure k is within the array length to avoid unnecessary rotations
  k = k % arr.length;

  // Slice the array and rearrange the elements
  var rotatedArray = arr.slice(k).concat(arr.slice(0, k));

  return rotatedArray;
};

var originalArray = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = rotateArray(originalArray, k);

console.log(rotatedArray);

//IIFE Function

var originalArray = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function (arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
})(originalArray, k);

console.log(rotatedArray);

//Arrow Fucntions

//1.Print odd numbers in an array

const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 18, 19];

var PrintOdd = (num) => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      console.log(num[i]);
    }
  }
};

PrintOdd(n1);

//2. Convert all the strings to title caps in a string array

const str1 = ["apple", "ball", "cat"];

//annonymous function

const totitlecase = strings.map(
  (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
);

console.log(totitlecase);

//3. Sum of all numbers in an array

const numarr1 = [1, 2, 3, 4];

var sums = () => {
  let sum = 0;
  numarr.forEach(function (num) {
    sum += num;
  });
  return sum;
};

console.log(sums());

//4.Return all the prime numbers in an array

var FindPrime1 = (array) => {
  array.forEach(function (num) {
    if (
      (function (num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      })(num)
    ) {
      console.log(num);
    }
  });
};
FindPrime1(primenum);

//5.Return all the palindromes in an array

const findPalindromes = (array) => {
  const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  };

  return array.filter((word) => isPalindrome(word));
};

const wordsArray = ["level", "hello", "radar", "world", "deed"];

const palindromes1 = findPalindromes(wordsArray);

console.log(palindromes1);
