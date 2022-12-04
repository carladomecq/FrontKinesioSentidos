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
      <Route element={<AuthGuard />}></Route>
      <Route path='/NuevoPaciente' element={<NuevoPaciente />} />
      <Route path='/Nosotros' element={<Nosotros />} />
      <Route path='/Contacto' element={<Contacto />} />
      <Route path='/GestionPacientes' element={<GestionPacientes />} />
      <Route path='/IngresoPaciente' element={<IngresoPaciente />} />
    </RouteNotFound>
  )
}

export default App
