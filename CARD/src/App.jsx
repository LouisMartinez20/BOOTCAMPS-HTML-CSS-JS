import { useState } from "react";
import { EcommerceComponent } from "./assets/componets/EcommerComponet/EcomerComponet";
import PizzaCard from "./assets/componets/PizzaComponet/PizzaCard";
import CreditCardRender from "./assets/componets/CreditCard/CreditCardRender";
const options = {
  ecommerce: <EcommerceComponent />,
  pizza: <PizzaCard />,
  tarjeta: <CreditCardRender />
};
export const App = () => {
  const [current, setCurrent] = useState(null);
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => setCurrent("ecommerce")}>Ecommerce</button>
        <button onClick={() => setCurrent("pizza")}>Pizza</button>
        <button onClick={() => setCurrent("tarjeta")}>Tarjeta</button>
      </div>
      <div style={{ marginTop: 30 }}>
        {current ? options[current] : <p>Selecciona un componente.</p>}
      </div>
    </div>
  );
};
export default App;