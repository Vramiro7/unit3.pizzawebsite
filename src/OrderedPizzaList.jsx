const OrderedPizzaList = ({pizzaList, SetPizzaLIst}) => {
	return (
		<ol>
			{
				pizzaList.map((currentPizza, index) => {
					return <li key={index}>{currentPizza.name}</li>
				})
			}
		</ol>
	)
}

export default OrderedPizzaList