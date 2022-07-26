import React from 'react';

//components
import PagesBanner from '../../components/PagesBanner/'
import PortfolioItems from '../../components/Portfolio/'
import Pagination from '../../components/Pagination/'

//fake data
import { portfolioData } from '../../data'

//styles
import "./portfolio.scss"

const Portfolio = () => {
	return (
		<div className="portfolios__page__container">
			<PagesBanner page="HOME - PORTFOLIO" pagetitle="PORTFOLIO"/>
			<main className="portfolios__items">
				<PortfolioItems data={portfolioData}/>	
			</main>
			<div className="pagination">
				<Pagination />
			</div>
		</div>
	)
}


export default Portfolio