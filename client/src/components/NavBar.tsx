import { Link } from "react-router"
import logo from "../../public/assets/logo.png"
import { ArrowRightCircle } from "../icons/ArrowRightCircle"
import { BoldButton } from "./BoldButton"


const NavBar = () => {

    return (
        <nav className='w-screen flex justify-center items-center h-40'>
            <div className="w-4/5 shadow-md bg-purple-300 bg-opacity-15 rounded-full text-white text-bold px-6 py-2 flex justify-between">
                <div className="flex justify-center items-center">
                    <img src={logo} className="w-10" alt="logo" />
                    <span className="text-2xl font-[600] ">Focus.Boost</span>
                </div>
                <div className="flex gap-4 justify-center items-center text-lg">
                    <ul className="flex gap-4">
                        <Link to='/numbertap'>
                            <li className="underline underline-offset-8">NumberTap</li>
                        </Link>
                        <li className="underline underline-offset-8">SameTiles</li>
                    </ul>
                    <BoldButton text='Signin' variant='secondary' endIcon={<ArrowRightCircle />} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar