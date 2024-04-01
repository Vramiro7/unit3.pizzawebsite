const OrderedToppingList = ({pizzaList, SetPizzaLIst}) => {
	return (
		<ol>
			{
				pizzaList.map((currentPizza, index) => {
					return <li key={index}>{currentPizza.topping}</li>
				})
			}
		</ol>
	)
}

export default OrderedToppingList