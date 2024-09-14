function ccc1() {
  for (let i = 0; i < 10; i++) {
    let output = '';
  
    for (let j = 0; j < i; j++) {
        output += '  ';
    }
  
    for (let k = 0; k < 10 - i; k++) {
        output += k + ' ';
    }
  
    console.log(output);
  }
}

function ccc2() {
  let i = 0
  while(i < 10) {
    let output = ""
    let j = 0;
    while(j < 10) {
      let temp = i * j;
      if (temp > 9)
        output += (i * j) + ' '
      else 
        output += (i * j) + '  '
      j++;
    }
     
    console.log(output);
    i++;
  }
}

function ccc3() {
  let i = 1;
  do {
    let output = ""
    let j = 0;
    do {
      output += "  "
      j++;
    } while (j <= 9 - i)
    
    j = 1
    do {
      output += j + " "
      j++;
    } while (j <= i)
    
    j--;
    let k = j - 1
    if (k > 0) {
      do {
        output += k + " "
        k--;
      } while (k > 0)
    }
    console.log(output); 
    i++;
  } while (i < 10)

  // second way
  i = 1;
  do {
    let output = ""
    let j = 0;
    do {
      output += "  "
      j++;
    } while (j <= i)
    
    j = 1
    do {
      output += j + " "
      j++;
    } while (j <= 9 - i)

    console.log(output); 
    i++;
  } while (i < 9)
}

console.log("\nFor Loop")
ccc1()
console.log("\nWhile Loop");
ccc2()
console.log("\nDo While");
ccc3()