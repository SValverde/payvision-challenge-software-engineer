function Count (input) {

  // Checks for a positive integer
  if(input<0){
    throw new RangeError('The input must be a possitive integer');
  }

  // Turns the integer into a binary string
  const binary = parseInt(input, 10);
  const binaryString = binary.toString(2);

  // Container array for the result with the counter initialized
  let res = [0];

  // Reverses the string
  const reversedString = binaryString.split("").reverse().join("");

  // Checks every character and if it is a one increments the counter 
  // and adds the index to the result array
  for(let i=0; i<reversedString.length; i++){
    if(reversedString[i]==='1'){
      res[0]++;
      res.push(i);
    }
  }  
  
  // Alternative without reversing the string

  // let positions = [];

  // for(let i=0; i<binaryString.length; i++){
  //   if(binaryString[i]==='1'){
  //     res[0]++;
  //     positions.push(binaryString.length-i-1);
  //   }
  // }

  // positions.reverse();
  // res = res.concat(positions);

  return res;

}

module.exports = { Count }
