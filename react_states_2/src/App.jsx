import './App.css'
import Lottery from "./Lottery"
import Form from "./Form"
function App() {
  let winCondition = (ticket) =>{
    return ticket.every((num) => num === ticket[0]);
  }
  return (
    <>
      <Lottery n={3} winCondition ={winCondition}/>
      <Form />
    </>
  )
}

export default App
