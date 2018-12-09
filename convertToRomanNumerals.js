function convertToRoman(num) {
  
  const romanNumbs = [["I","II","III","IV","V","VI","VII","VIII","IX"],
                      ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
                      ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                      ["M", "MM", "MMM"]];
                    
  let romanResult = [];
  let decimalCounter = 0;
  let numCounter = num;
  //counts the decimal places of num
  if(numCounter > 0) {
    while(numCounter > 0) {
      numCounter = Math.floor(numCounter / 10);
      decimalCounter++;
    }
  }

  //input number and decimal location, output string from array romanNumbs
  for(let i = 0; i < decimalCounter; i++) {
    romanResult.unshift(romanNumbs[i][num%10 -1]);
    num = Math.floor(num/10);
  }

  //concatinate string from array.
  let newArr = romanResult.filter(Boolean);
  return newArr.join('');

}

convertToRoman(955);