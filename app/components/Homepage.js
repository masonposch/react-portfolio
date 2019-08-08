import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './homepageChildren/Hero'
import About from './homepageChildren/About'
import FeaturedLang from './homepageChildren/FeaturedLang'
import WorkSamples from './homepageChildren/WorkSamples'
import Form from './homepageChildren/Form'
import Testimonials from './homepageChildren/Testimonials'

import Footer from './Footer'


class Home extends React.Component{

	render() {
		return (
			<div className="homePageRender">
				<Hero />
				<About />
				<WorkSamples />
				<Testimonials />
				<Footer />
			</div>
		)
	}
}



export default Home;


// <FeaturedLang />
