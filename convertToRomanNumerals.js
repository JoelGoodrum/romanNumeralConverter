function convertToRoman(num) {
  
  const romanNumbs = [["I","II","III","IV","V","VI","VII","VIII","IX"],
                      ["X","XX","XXX","XL","L","LXX","LXXX","XC"],
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

  for(let i = decimalCounter - 1; i > -1; i--) {
    let tempNum = (num % 10) - 1;
    if(tempNum > 0) {
      romanResult.push(romanNumbs[i][tempNum]);
    }
    num = Math.floor(num / 10);
  }

  return romanResult;

}

convertToRoman(15);