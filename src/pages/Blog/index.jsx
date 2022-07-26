import React from 'react'

//components
import PagesBanner from '../../components/PagesBanner'
import BlogList from '../../components/Blog/'
import Pagination from '../../components/Pagination'

//fake data
import { blogData } from '../../data'

//styles
import "./blog.scss"

const Blog = () => {
	return  (
		<div className="blogs__page__container">
			<PagesBanner page="HOME - BLOG" pagetitle="BLOG"/>
			<main className="blogs__items">
				<BlogList data={blogData}/>
			</main>
			<div className="pagination">
				<Pagination />	
			</div>
		</div>
	)
}

export default Blog