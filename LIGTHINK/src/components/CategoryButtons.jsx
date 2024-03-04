import React, { useState } from "react";
import { Link } from "react-scroll";


const CategoryButtons = ({ button }) => {
    const [isHover, setHover] = useState(false)

    return (
        <Link to={button.link} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} smooth={true} spy={true}>
            <button id={button.id} style={{ background: isHover ? button.color : 'transparent' }}
                className="button border-[1px] border-white bg-black/50 p-3 text-white rounded-full hover:border-transparent hover:bg-white  transition-all duration-200">{button.name}
            </button>
        </Link >
    )
}

export default CategoryButtons