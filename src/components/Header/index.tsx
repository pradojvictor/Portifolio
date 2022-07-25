import Link from "../Link"

import "./style.css"

function Header() {
    return (
        <header>

            <nav className="nav-1">

                <div className="text-1">
                    <h1><Link texto="Web developer" redirect="/" targett={undefined}/></h1>
                </div>

                <ul className="ulNav-1">
                    <li><Link texto="home" redirect="/" targett={undefined}/></li>
                    <li><Link texto="work" redirect="/work" targett={undefined}/></li>
                    <li><Link texto="about" redirect="/about" targett={undefined}/></li>
                    <li><Link texto="contact" redirect="/contact" targett={undefined}/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header