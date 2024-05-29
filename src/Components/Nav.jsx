import React, { useContext, useState } from 'react'
import uzFlag from "../assets/images/Uzbekistan-flag.webp";
import ruFlag from "../assets/images/russia.png";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Context } from '../Context/Context';


const Nav = () => {
    const { lang, flag, changeLang, value, setValue } = useContext(Context)
    const [active, setActive] = useState(false)
    const back = () => {
        setActive(false)
        setValue('')
    }
    return (
        <>
            <nav className="nav">
                <div className="nav_lang">
                    <button className={`nav_lang_btn ${flag && 'active'} `} onClick={() => changeLang('uz')}>
                        <span>Uz</span>
                        <img src={uzFlag} alt="" />
                    </button>
                    <button className={`nav_lang_btn ${!flag && 'active'} `} onClick={() => changeLang('ru')}>
                        <span>Ru</span>
                        <img src={ruFlag} alt="" />
                    </button>
                </div>
                <div className="container">
                    <h2 className="nav_title">{lang.appbartitle}</h2>
                </div>
                <button className="nav_search" onClick={() => setActive(true)}>
                    <IoSearchSharp />
                </button>

            </nav>
            <nav className={`nav search ${active && 'active'}`}>
                <button className="nav_back" onClick={back}>
                    <IoMdArrowBack />
                </button>
                <div className="container">
                    <input value={value} onChange={(e) => setValue(e.target.value)} className='nav_input' type="text" placeholder={lang.appbarseacrch} />
                </div>
                <button className="nav_clear" onClick={() => setValue('')}>
                    <IoMdCloseCircleOutline />
                </button>
            </nav>
        </>
    )
}

export default Nav