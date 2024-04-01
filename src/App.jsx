import {useEffect, useState} from 'react'
import OrderedPizzaList from './OrderedPizzaList' 
import OrderedToppingList from './OrderedToppingList';

const state = [
  {name: `Pepperoni`, topping: `Pepperoni`},
  {name: `Cheese`, topping: `None`},
  {name: `Sausage`, topping: `Sausage`}
];

const App = () => {
  const [pizzaList, setPizzaList] = useState([])
  const [pizzaNameInput, SetPizzaNameInput] = useState('')
  const [toppingNameInput, SetToppingNameInput] = useState('')
  
  useEffect(() => {
    setPizzaList(state);
  }, [])
  
  const onPizzaFormSubmit = (event) => {
    event.preventDefault();
    setPizzaList([...pizzaList, {name: pizzaNameInput, topping: toppingNameInput}])
  }

  return (
    <>
     <h1>Vitezza's Menu</h1>

     <form onSubmit = {onPizzaFormSubmit}>
       <input placeholder="Pizza Type" name='newPizzaName' onChange={(event) => SetPizzaNameInput(event.target.value)}/><br />
       <input placeholder='Topping' name='newToppingName' onChange={(event) => SetToppingNameInput(event.target.value)}/><br />
       <button>Send Pizza Order</button>
     </form>
      <h2 id='pizzaNameList'>Pizza Name</h2>
     <OrderedPizzaList pizzaList={pizzaList} setPizzaList={setPizzaList} />
      <h2 id='ToppingList'>Topping Type</h2>
     <OrderedToppingList pizzaList={pizzaList} setPizzaList={setPizzaList} />
    </>
  )
}

export default App





