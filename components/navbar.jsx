import { BurgerIcon } from "./icons/burgerIcon";
import {CloseMenuIcon} from "./icons/closeMenuIcon"; 
import { useEffect, useState, useRef } from "react";

const NavbarComponent = () => {
    const menuRef = useRef(null)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            menuRef.current.classList.remove("h-0")
            menuRef.current.classList.add("h-32")
        } else {
            menuRef.current.classList.add("h-0")
            menuRef.current.classList.remove("h-32")
        }
    }, [open])
const handleMenu = () => {
    setOpen(!open)
}

return (
    <div className="sticky top-0 z-50 shadow-xl animate-fadein">
        <div className="flex justify-end w-full border-b-[1px] border-b-slate-800 bg-slate-200">
            <button className="hover:scale-110 p-2" onClick={handleMenu}>
               {!open ?  <BurgerIcon /> : <CloseMenuIcon/>}
            </button>
        </div>
        <div className="w-full bg-slate-300 absolute transition-all duration-500 ease-out h-0 overflow-hidden shadow-xl" ref={menuRef}>
            <ul className="flex flex-col divide-y-[1px] divide-slate-400">
                <li className="hover:bg-slate-400 text-slate-900 cursor-pointer h-10 text-left text-xl w-full pl-2 flex items-center">Home</li>
                <li className="hover:bg-slate-400 text-slate-900 cursor-pointer h-10 text-left text-xl w-full pl-2 flex items-center">Bio</li>
                <li className="hover:bg-slate-400 text-slate-900 cursor-pointer h-10 text-left text-xl w-full pl-2 flex items-center">Certifications & Competences</li>
            </ul>
        </div>
    </div>
);
}

export default NavbarComponent;