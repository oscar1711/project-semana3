import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Developers from '../Developers'
import Projects from '../Projects'
import About_Me from '../About-me'
import Navbar from '../../Components/Navbar';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Developers', element: <Developers /> },
    { path: '/Projects', element: <Projects /> },
    { path: '/About-me', element: <About_Me /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />

    </BrowserRouter>
  )
}
export default App
