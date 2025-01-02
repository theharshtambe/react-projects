function Order({ closeHour, openHour }) {
   return (
      <div className="order">
         <p>
            We are open from {openHour}:00 till {closeHour}:00 Come visit us or
            order online.
         </p>
         <button className="btn">Order Now</button>
      </div>
   );
}

export default Order;
