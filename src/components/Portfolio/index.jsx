import React from 'react';

//components
import { Grid } from '@mui/material'

//styles
import "./portfolio.scss"

const Portfolio = ({data}) => {
	return (
		<div className="portfolio__container">
			<Grid container spacing={5}>
				{data.map(item => (
					<Grid item md={4} sm={6} xs={12}>
						<div className="portfolio__card">
							<div className="img">
								<img src={item.img} alt="" />
							</div>
							<div className="content">
								<p className="hashtag">{item.hashtag}</p>
								<h5 className="title">{item.title}</h5>
							</div>
						</div>	
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default Portfolio