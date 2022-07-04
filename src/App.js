import './App.css';

// const stripe = require("stripe")('sk_test_51JrsigAOaRtl8XJSVfUA8hcDAyvJ2LIuXHOu6eFrQ5eyp4GtV41CMVndxrBdiVm503PNZU3PjuxgksduUagoPXI400e3Kl0TWb');

const stripeFunction= async()=>{
  const response = await fetch('/create');
    const body =  response;
    console.log(body);
}
function App() {
  return (
    <div className="App">
     <button onClick={stripeFunction}>
        example button
     </button>
    </div>
  );
}

export default App;
