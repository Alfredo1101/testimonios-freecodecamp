import './App.css';
import Testimonio from "./componentes/Testimonio";
function App() {
  return (
    <div className="App">
      <div  className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestro alumnos sobre freeCodeCamp:</h1>
      <Testimonio
      nombre = 'Shawn Wang'
      pais= 'Singapur'
      imagen= 'shawn'
      cargo= 'Ingeniero de Software'
      empresa = 'Amazon'
      testimonio= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
      <Testimonio
      nombre = 'Sara Chima'
      pais= 'Nigeria'
      imagen= 'sarah'
      cargo= 'Ingeniera de Software en ChatDesk'
      empresa = 'ChatDesk'
      testimonio= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
      <Testimonio
      nombre = 'Emma Bostian'
      pais= 'Suecia'
      imagen= 'emma'
      cargo= 'Ingeniera de Software'
      empresa = 'Spotify'
      testimonio= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>


    </div>
  </div>
  );
}

export default App;
