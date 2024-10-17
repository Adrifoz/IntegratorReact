import React from 'react';
import '../CSS/Contacto.css'

function Contacto () {
return ( 
<>
<div className='contactContainer'>
  <div className='homeContacto'>
      <h3>
        Contacto
      </h3>
          <p>Celular: 2262666666 / 2262555555</p>
          <p>Mail: plomeriaygas@gmail.com</p>
          <p>Instagram: @plomeriaygasnecochea</p>
          
          <img src={"https://i.pinimg.com/550x/7e/e6/f6/7ee6f6d7043c1b2e34726d4f71976747.jpg"} alt={"Caricatura de plomero"}/>
    </div>

    <footer>
    <p>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
  </footer>
  
  </div>
  </>
);
}

export default Contacto;