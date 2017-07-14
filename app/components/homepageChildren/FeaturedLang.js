import React from 'react'
import ReactDOM from 'react-dom'



class FeaturedLang extends React.Component {

	constructor() {
		super();
	}


	render() {

		return(

			<div className="featured-section">
				
					<img src={"/assets/images/mongodb-logo.png"} alt="MongoDB" />
					<img src={"/assets/images/express-logo.png"} alt="Express JS" />
					<img src={"/assets/images/react-logo.png"} alt="React JS" />
					<img src={"/assets/images/node-logo.png"} alt="Node JS" />
					<img src={"/assets/images/sass-logo.png"} alt="SASS" />
					<img src={"/assets/images/html5-logo.png"} alt="HTML 5" />
				
			</div>

		)

	}

}




export default FeaturedLang; 