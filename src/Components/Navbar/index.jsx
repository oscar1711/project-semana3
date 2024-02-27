/* import{NavLink} from 'react-router-dom'
const Navbar =() => {
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className = 'flex-justify-between items-center '>
            <ul className='flex item-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to = '/'>
                        Restaurantes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Developers'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Projects'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Mapas
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar */
import { NavLink } from 'react-router-dom';
import SearchBar from './searchBar'; // Asegúrate de importar el componente SearchBar desde su ubicación correcta

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className='flex justify-between items-center'>
            <ul className='flex item-center gap-10'>
                <li className='font-semibold text-2xl'>
                    <NavLink to = '/'>
                        Restaurantes
                    </NavLink>
                </li>
                <li className='text-2xl'> 
                    <NavLink 
                        to='/'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Home
                    </NavLink>
                </li>
                <li className='text-2xl'>
                    <NavLink
                        to='/Developers'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Categorias
                    </NavLink>
                </li>
                <li className='text-2xl'>
                    <NavLink
                        to='/Projects'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Mapas
                    </NavLink>
                </li>
            </ul>

            {/* Aquí incluimos el componente de SearchBar */}
            <SearchBar />
        </nav>
    );
};

export default Navbar;