import React from 'react';
function Testimonio(){
  return(
    <div className= 'contenedor-testimonio'>
      <img className="imagen-testimonio"
      src={require('../imagenes/testimonio-emma.png')}
      alt= 'Fotode Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de sofware en Spotify</p>
        <p className='texto-testimonio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>

      </div>
    </div>
  );
}
export default Testimonio;