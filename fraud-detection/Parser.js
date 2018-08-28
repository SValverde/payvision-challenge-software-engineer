

// Parser separated in case the format changes or multiple parsers are needed
// for different formats
class Parser {

  static ComaParser(line){
    let items = line.split(',');
    let order = {
      orderId: Number(items[0]),
      dealId: Number(items[1]),
      email: items[2].toLowerCase(),
      street: items[3].toLowerCase(),
      city: items[4].toLowerCase(),
      state: items[5].toLowerCase(),
      zipCode: items[6],
      creditCard: items[7]
    };

    return order;
  }

}

module.exports = { Parser }