function Pizza({ pizzaObject }) {
   return (
      <li className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
         <img src={pizzaObject.photoName} alt="" />
         <div>
            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>
            <span>{pizzaObject.soldOut ? 'Sold Out' : pizzaObject.price}</span>
         </div>
      </li>
   );
}

export default Pizza;
