const fs = require('fs')
const path = require('path')

class OrderReader{

  // Reads from Txt file at filePath and parses with parser
  // passing parser as a variable is a little bit of an overkill
  // but could be useful in some cases 
  static ReadOrdersFromTxt(filePath, parser){
    // READ FRAUD LINES
    let orders = [];
  
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let lines = fileContent.split('\n');

    for (let line of lines) {
      let order = parser(line);
      orders.push(order);
    }
  
    return orders;
  }

  // Example of a possible future functionality that would fit into this class
  static ReadOrdersFromURL(url, parser){
    return null;
  }
  
}



module.exports = { OrderReader }