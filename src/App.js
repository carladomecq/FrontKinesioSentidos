import React from 'react'
import Home from './screens/Home'
import Nosotros from './screens/Nosotros'
import { RouteNotFound } from './utilities/RouteNotFound'
import { Route } from 'react-router-dom'
import { PublicRoutes } from './guard/routes'
import { AuthGuard } from './guard/AuthGuard'
import Consultas from './screens/Consultas'
import ListaConsultas from './screens/ListaConsultas'
import Formulario from './components/Formulario'
import GestionPacientes from './components/GestionPacientes'






const App = () => {
  return (
    <RouteNotFound>
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route element={<AuthGuard />}></Route>
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/consultas' element={<Consultas />} />
      <Route path='/listaconsultas' element={<ListaConsultas />} />
      <Route path='/formulario' element={<Formulario />} />
      <Route path='/gestionpacientes' element={<GestionPacientes />} />
    </RouteNotFound>
  )
}

export default App
