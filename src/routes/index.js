import Home from '../pages/Home/'
import About from '../pages/About/'
import Portfolio from '../pages/Portfolio/'
import Blog from '../pages/Blog/'
import Contact from '../pages/Contact/'

export const routes = [
	{ id: 1, route: "/", element: <Home /> },
	{ id: 2, route: "/about", element: <About /> },
	{ id: 3, route: "/contact", element: <Contact /> },
	{ id: 4, route: "/portfolio", element: <Portfolio /> },
	{ id: 5, route: "/blog", element: <Blog /> },
]