import Order from './Order';

function Footer() {
   const hour = new Date().getHours();
   const openHour = 10;
   const closeHour = 21;
   const isOpen = hour >= openHour && hour <= closeHour;

   return (
      <footer className="footer">
         {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />
         ) : (
            <p>
               We are happy to welcome you between {openHour}:00 and {closeHour}
               :00
            </p>
         )}
      </footer>
   );
}

export default Footer;
