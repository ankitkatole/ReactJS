import './App.css'
import Lottery from "./Lottery"
import Form from "./Form"
import Counter from "./Counter"
function App() {
  let winCondition = (ticket) =>{
    return ticket.every((num) => num === ticket[0]);
  }
  return (
    <>
      {/* <Lottery n={3} winCondition ={winCondition}/>
      <Form /> */}
      <Counter />
    </>
  )
}

export default App
