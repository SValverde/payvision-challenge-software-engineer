

// Fraud criteria separated as static functions that receive 
class FraudCriteria {

  static FraudInOrders(orders){

    let fraudResults = [];
    
      // CHECK FRAUD
    for (let i = 0; i < orders.length; i++) {
      let current = orders[i]
      let isFraudulent = false
    
      for (let j = i + 1; j < orders.length; j++) {
        isFraudulent = false
    
        if (current.dealId === orders[j].dealId
          && current.email === orders[j].email
          && current.creditCard !== orders[j].creditCard) {
            isFraudulent = true
          }
          
        if (current.dealId === orders[j].dealId
          && current.state === orders[j].state
          && current.zipCode === orders[j].zipCode
          && current.street === orders[j].street
          && current.city === orders[j].city
          && current.creditCard !== orders[j].creditCard) {
            isFraudulent = true
          }
          
          if (isFraudulent) {
            fraudResults.push({
              isFraudulent: true,
              orderId: orders[j].orderId
          })
        }
      }
    }    
    return fraudResults;
  }

  // Example of different criteria that could be used alternatively
  static FraudInOrdersAlternative(orders){
    let fraudResults = [];
    
      // CHECK FRAUD
    for (let i = 0; i < orders.length; i++) {
      let current = orders[i]
      if(current.email==="bugs@bunny.com")
        fraudResults.push({isFraudulent:true, orderId: current.orderId});    
      
    }    
    return fraudResults;
  }

}
    
module.exports = { FraudCriteria }