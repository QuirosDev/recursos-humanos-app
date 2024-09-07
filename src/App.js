import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleado/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleado/AgregarEmpleado";
import EditarEmpleado from "./empleado/EditarEmpleado";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path='/' element={<ListadoEmpleados />} />
          <Route exat path='/agregar' element={<AgregarEmpleado/>}/>
          <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
