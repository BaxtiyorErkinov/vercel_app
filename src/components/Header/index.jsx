import React, {useState, useEffect} from 'react';

//icons
import {BsSearch} from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

//logo
import Logo from '../../assets/images/logo.png'

//router
import {Link} from 'react-router-dom'

//styles
import "./header.scss"

const navs = [
	{
		id: 1,
		title: "Home",
		link: "/"
	},
		{
		id: 2,
		title: "About",
		link: "/about"
	},
		{
		id: 3,
		title: "Portfolio",
		link: "/portfolio"
	},
		{
		id: 4,
		title: "Blog",
		link: "/blog"
	},
		{
		id: 5,
		title: "Contact",
		link: "/contact"
	}
]


const Header = () => {
	const [isActiveMenu, setIsActiveMenu] = useState(false)
  	const [offset, setOffset] = useState(0);
  	const [scrolling, setScrolling] = useState(false);

	  useEffect(() => {
	    const onScroll = () => setOffset(window.pageYOffset);
	    window.removeEventListener("scroll", onScroll);
	    window.addEventListener("scroll", onScroll, { passive: true });
	    if (offset > 100) {
	      setScrolling(true);
	    } else {
	      setScrolling(false);
	    }
	    return () => {
	      window.removeEventListener("scroll", onScroll);
	    };
	  }, [offset]);
	return (
		<header className={scrolling ? "scrolled" : ""}>
			<div className="logo">
				<Link to="/"><img src={Logo} alt="logo" /></Link>
			</div>
			<nav className={`navigation ${isActiveMenu ? "mobile_menu" : ""}`}>
				<ul className="links">
					{navs.map(nav => (
						<li className="links__item" key={nav.id} onClick={() => setIsActiveMenu(false)}><Link to={nav.link}>{nav.title}</Link></li>
					))}
				</ul>
			</nav>
			<div className="right__section">
				<div className="search-btn">
					<span className="icon">
						<BsSearch />
					</span>
				</div>
				<div className={`toggle_menu ${isActiveMenu ? "active" : ""}`}>
					<span className="icon" onClick={() => setIsActiveMenu(!isActiveMenu)}>
						{isActiveMenu 
							? <AiOutlineClose /> 
							: <AiOutlineMenu />
						}
					</span>
				</div>
			</div>
		</header>
	)
}

export default Header;