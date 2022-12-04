import React from 'react'
import Home from './screens/Home'
import Nosotros from './screens/Nosotros'
import { RouteNotFound } from './utilities/RouteNotFound'
import { Route } from 'react-router-dom'
import { PublicRoutes } from './guard/routes'
import { AuthGuard } from './guard/AuthGuard'
import Contacto from './screens/Contacto'
import IngresoPaciente from './screens/IngresoPaciente'
import GestionPacientes from './components/GestionPacientes'




const App = () => {
  return (
    <RouteNotFound>
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route element={<AuthGuard />}></Route>
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/ingresopaciente' element={<IngresoPaciente />} />
      <Route path="/gestionpacientes" element={<GestionPacientes />} />
    </RouteNotFound>
  )
}

export default App
