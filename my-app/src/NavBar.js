import {NavLink} from "react-router-dom";


function NavBar() {

    return (
            <nav className="flex justify-between">
                <ul>
                    <li>
                <NavLink to ="/" className={({isActive}) => `text-2xl hover:italic ${isActive && "font-semibold"}`}>
                    Stardew Valley Social
                    </NavLink></li>
                       <li> <NavLink to ="/about" className={({isActive}) => `text-2xl hover:italic ${isActive && "font-semibold"}`}>
                        About
                        </NavLink></li>
                       <li> <NavLink to ="/explore" className={({isActive}) => `text-2xl hover:italic ${isActive && "font-semibold"}`}>
                        Explore Page
                        </NavLink></li>
                </ul>
            </nav>

    )
}

export default NavBar;