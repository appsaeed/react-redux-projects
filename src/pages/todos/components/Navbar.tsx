import { Link } from "react-router-dom";
import settings from "../../../app/settings";

export default function Navbar({ text = 'Simple Todo Application with Redux' }) {
    return (
        <div className="top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg flex justify-between px-6">
            <div>
                <Link to={'/'}>
                    <img loading="lazy" className="w-10 h-10" src={settings.logo} alt={'logo'} />
                </Link>
            </div>
            <div> {text}</div>
        </div>
    )
}
