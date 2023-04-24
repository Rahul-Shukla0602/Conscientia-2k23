import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo3.png'
import {toast} from "react-hot-toast"
function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex items-center justify-between w-11/12 max-w-[1160px] py-2 mx-auto gap-46'>
        <Link to='/'>
            <img src={logo} alt="LOGO"  width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-white flex gap-x-10 mx-auto'>
                <li >
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/events'>Events</Link>
                </li>

                <li>
                    <Link to='/merchandise'>Merchandise</Link>
                </li>

                <li>
                    <Link to='/sponsors'>Sponsors</Link>
                </li>

                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='text-white flex gap-x-10 pl-18'>
        { !isLoggedIn &&
                <Link to='/login'>
                    <button>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'>
                    <button>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/'>
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/dashboard'>
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
