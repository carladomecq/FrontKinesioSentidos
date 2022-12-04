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
import NuevoPaciente from './screens/NuevoPaciente'




const App = () => {
  return (
    <RouteNotFound>
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route path={PublicRoutes.Nosotros} element={<Nosotros />} />
      <Route path={PublicRoutes.IngresoPaciente} element={<IngresoPaciente />} />
      <Route path={PublicRoutes.GestionPacientes} element={<GestionPacientes />} />
      <Route path={PublicRoutes.Contacto} element={<Contacto />} />
      <Route element={<AuthGuard />}></Route>
      <Route path='/NuevoPaciente' element={<NuevoPaciente />} />
     
    </RouteNotFound>
  )
}

export default App
