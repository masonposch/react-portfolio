import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './homepageChildren/Hero'
import FeaturedLang from './homepageChildren/FeaturedLang'
import WorkSamples from './homepageChildren/WorkSamples'


class Home extends React.Component{

	render() {
		return (
			<div className="homePageRender">
				<Hero />
				<FeaturedLang />
				<WorkSamples />
			</div>
		)
	}
}



export default Home;