
// Arrays that define the replacements for the address for cleaner code and scalability
const streetReplacements = [{in:'st.',out:'street'}, {in:'rd.', out:'road'}]
const stateReplacements = [{in:'il',out:'illinois'}, {in:'ca', out:'california'}, {in:'ny', out:'new york'}]

class OrderNormalizer{

	static NormalizeOrders(orders){
		// NORMALIZE
		for (let order of orders) {
			// Normalize email
			// This is very very confusing, commenting it gives the same results with the provided files
			// Looks like it has a specific purpose i can not imagine so i let it as it is. 
			let aux = order.email.split('@')
			let atIndex = aux[0].indexOf('+')
			aux[0] = atIndex < 0 ? aux[0].replace('.', '') : aux[0].replace('.', '').substring(0, atIndex - 1)
			order.email = aux.join('@')

			// Normalize street
			// order.street = order.street.replace('st.', 'street').replace('rd.', 'road')
			for(let streetReplacement of streetReplacements){
				order.street = order.street.replace(streetReplacement.in, streetReplacement.out);
			}

			// Normalize state
			// order.state = order.street.replace('il', 'illinois').replace('ca', 'california').replace('ny', 'new york')
			for(let stateReplacement of stateReplacements){
				order.state = order.state.replace(stateReplacement.in, stateReplacement.out);
			}
		}
	}
}

module.exports = { OrderNormalizer }