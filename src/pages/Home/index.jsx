import React from 'react';

//components
import HeroSlider from '../../components/HeroSlider/'
import Services from '../../components/Services/'
import AboutAgency from '../../components/AboutAgency/'
import Portfolio from '../../components/Portfolio/'
import Clients from '../../components/Clients/'
import ClientsSlider from '../../components/ClientsSlider/'
import Blog from '../../components/Blog/'

//images
import Img1 from '../../assets/images/blog1.jpg'
import Img2 from '../../assets/images/blog2.jpg'
import Img3 from '../../assets/images/blog3.jpg'

//styles
import "./home.scss"

const data = [
	{id: 1, hashtag: "All, Graphic", title: "DESIGN STYLES", img: "https://meipaly-nextjs.vercel.app/_next/static/images/1-f5c360ccd1fe8738aa3f8a610f68186e.jpg"},
	{id: 2, hashtag: "All, Graphic", title: "DESIGN STYLES", img: "https://meipaly-nextjs.vercel.app/_next/static/images/2-565a7c74540f700197eee9d2f6216d0b.jpg"},
	{id: 3, hashtag: "All, Graphic", title: "DESIGN STYLES", img: "https://meipaly-nextjs.vercel.app/_next/static/images/3-486c9cc3084465656caf06b2021d3092.jpg"},
	{id: 4, hashtag: "All, Graphic", title: "DESIGN STYLES", img: "https://meipaly-nextjs.vercel.app/_next/static/images/4-d9ca7a98d86ad0fc9a36b5697d0c45f1.jpg"},
	{id: 5, hashtag: "All, Graphic", title: "DESIGN STYLES", img: "https://meipaly-nextjs.vercel.app/_next/static/images/5-62117542d788b25a7204ae769ddfcf8e.jpg"},
	{id: 6, hashtag: "All, Graphic", title: "DESIGN STYLES", img: "https://meipaly-nextjs.vercel.app/_next/static/images/6-f99e50d7b951b8cd249ee35f071d7db0.jpg"},
]
const blog = [
	{
		id: 1, 
		title: "BASIC RULES OF RUNNING WEB AGENCY BUSINESS",
		date: "20 NOV",
		img: Img1
	},
		{
		id: 2, 
		title: "BECOME THE BEST SALE MARKETER",
		date: "20 NOV",
		img: Img2
	},	
	{
		id: 3, 
		title: "INTRODUCING LATEST MOPALY FEATURES",
		date: "20 NOV",
		img: Img3
	}
]

const Home = () => {
	return (
		<div className="home">
			<HeroSlider />
			<Services />
			<AboutAgency />
			<main className="portfolio__section">
				<div className="portfolio__section__title">
					<p className="title">OUR PORTFOLIO</p>
					<h1 className="subtitle">WORK SHOWCASE</h1>
					<p className='desc'>
						We are committed to providing our customers with exceptional service while offering our employees the best training.
					</p>
				</div>
				<Portfolio data={data}/>
			</main>
			<Clients />
			<ClientsSlider />
			<main className="blog__section">
				<div className="blog__section__title">
					<p className="title">OUR NEWS & ARTICLES</p>
					<h1 className="subtitle">LATEST BLOG POSTS</h1>
					<p className='desc'>We are committed to providing our customers with exceptional service while offering our employees the best training.</p>
				</div>
				<Blog data={blog}/>
			</main>
		</div>
	)
}

export default Home