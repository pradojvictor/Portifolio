import Link from "../Link"

import "./style.css"

function Header() {
    return (
        <header>

            <nav className="nav-1">

                <div className="text-1">
                    <h1>Web developer</h1>
                </div>

                <ul className="ulNav-1">
                    <li><Link texto="home" redirect="/"/></li>
                    <li><Link texto="work" redirect="/work"/></li>
                    <li><Link texto="about" redirect="/about"/></li>
                    <li><Link texto="contact" redirect="/contact"/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header