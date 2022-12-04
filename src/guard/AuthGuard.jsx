import { Navigate, Outlet } from 'react-router-dom'
//import { PublicRoutes } from './routes'

// 

export const AuthGuard = () => {
  const condition = false
  return condition ? <Outlet /> : <Navigate to={'Redireccion'} />
}
