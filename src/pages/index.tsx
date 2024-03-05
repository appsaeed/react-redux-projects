import { Link } from "react-router-dom";

export default function Homepage() {
    return <>
        <div className="menus mt-9 w-52 mx-auto">
            <ul className="">
                <li><Link className="text-blue-600 hover:underline" to={'/'}>Home</Link></li>
                <li><Link className="text-blue-600 hover:underline" to={'/shop'}>Shop</Link></li>
                <li><Link className="text-blue-600 hover:underline" to={'/todos'}>Todos</Link></li>
            </ul>
        </div>
    </>
}