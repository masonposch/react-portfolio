import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './homepageChildren/Hero'
import FeaturedLang from './homepageChildren/FeaturedLang'
import WorkSamples from './homepageChildren/WorkSamples'

import Footer from './Footer'


class Home extends React.Component{

	render() {
		return (
			<div className="homePageRender">
				<Hero />
				<FeaturedLang />
				<WorkSamples />
				<Footer />
			</div>
		)
	}
}



export default Home;