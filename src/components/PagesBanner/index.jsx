import React from 'react';

import "./pagespreview.scss"

const PagesBanner = ({page, pagetitle}) => {
	return (
		<div className="preview__container">
			<div className="content">
				<p className="page">{page}</p>
				<h1 className="page__title">{pagetitle}</h1>
			</div>
		</div>
	)
}

export default PagesBanner;