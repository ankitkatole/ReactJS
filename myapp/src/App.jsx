import Product from "./Product";
import Button from "./Button";
import Form from "./Form";
import "./App.css";
function App() {

  return (
    <>
      {/* <div className="product-container">
        <Product title="Keyboard" url="../src/assets/keyboard.png" description ={["Dynamic","Mechanical"]} oldPrice={3000} newPrice= {2300} />
        <Product title="Mouse" url="../src/assets/mouse.png" description ={["Dynamic","RGB"]} oldPrice={2000} newPrice= {1300} />
        <Product title="CPU" url="../src/assets/CPU.png" description ={["Dynamic","Powerful","Fast"]} oldPrice={18000} newPrice= {15000} />
        <Product title="Keyboard" url="../src/assets/Monitor.png" description ={["Dynamic","Bright","LightWeight"]} oldPrice={13000} newPrice= {10000} />
      </div>
      <Button name = "Hello" /> */}
      <Form />
    </>
  )
}

export default App
