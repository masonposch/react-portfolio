import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './homepageChildren/Hero'
import FeaturedLang from './homepageChildren/FeaturedLang'


class Home extends React.Component{

	render() {
		return (
			<div>
				<Hero />
				<FeaturedLang />
			</div>
		)
	}
}



export default Home;