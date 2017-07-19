import React from 'react'
import ReactDOM from 'react-dom'



class FeaturedLang extends React.Component {

	constructor() {
		super();
	}


	render() {

		return(

			<div className="featured-section">
				
					<img className="logo" src={"/assets/images/mongodb-logo.png"} alt="MongoDB" />
					<img className="logo" src={"/assets/images/express-logo.png"} alt="Express JS" />
					<img className="logo" src={"/assets/images/react-logo.png"} alt="React JS" />
					<img className="logo" src={"/assets/images/node-logo.png"} alt="Node JS" />
					<img className="logo" src={"/assets/images/sass-logo.png"} alt="SASS" />
					<img className="logo" src={"/assets/images/html5-logo.png"} alt="HTML 5" />
				
			</div>

		)

	}

}




export default FeaturedLang; 