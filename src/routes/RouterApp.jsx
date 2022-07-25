import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { routes } from './index'
import PageLayout from '../layout/PageLayout'

const RouterApp = () => {
	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
			{routes.map(route => (
				<Route path={route.route} element={route.element} key={route.id}/>
			))}
			</Route>
		</Routes>
	)
}

export default RouterApp