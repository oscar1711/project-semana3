import{NavLink} from 'react-router-dom'
const Navbar =() => {
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className = 'flex-justify-between items-center '>
            <ul className='flex item-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to = '/'>
                        David
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Developers'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Developers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Projects'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about-me'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        About me
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar