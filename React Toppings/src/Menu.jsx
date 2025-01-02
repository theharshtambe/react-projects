import Pizza from './Pizza';
import { pizzaData } from './data/pizzaData';

function Menu() {
   const pizzas = pizzaData;
   return (
      <div className="menu">
         <h2>Our Menu</h2>

         {pizzas ? (
            <>
               <p>
                  Authentic Italian cuisine. 6 creative dishes to choose from.
                  All from our stone oven, all organic, all delicious.
               </p>

               <ul className="pizzas">
                  {pizzas.map((pizza) => (
                     <Pizza pizzaObject={pizza} key={pizza.name} />
                  ))}
               </ul>
            </>
         ) : (
            <p>We are still working on our menu. Please come back later :) </p>
         )}
      </div>
   );
}

export default Menu;
