const { OrderReader } = require('./OrderReader')
const { OrderNormalizer } = require('./OrderNormalizer')
const { Parser } = require('./Parser')
const { FraudCriteria } = require('./FraudCriteria')
const path = require('path')

function Check (file, root = path.join( __dirname, 'Files')) {

  //You could have different sources for the orders in this case we use the txt function
  let orders = OrderReader.ReadOrdersFromTxt(path.join(root,file), Parser.ComaParser);

  OrderNormalizer.NormalizeOrders(orders);

  return FraudCriteria.FraudInOrders(orders);
}

module.exports = { Check }
