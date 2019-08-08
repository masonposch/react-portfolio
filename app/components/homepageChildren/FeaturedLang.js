import React from 'react'
import ReactDOM from 'react-dom'



class FeaturedLang extends React.Component {

	constructor() {
		super();
	}


	render() {

		return(

			<div className="featured-section">

					<div><img className="logo" src={"/assets/images/mongodb-logo.png"} alt="MongoDB" title="MongoDB" /></div>
					<div><img className="logo" src={"/assets/images/express-logo.png"} alt="Express JS" title="Express JS" /></div>
					<div><img className="logo" src={"/assets/images/react-logo.png"} alt="React JS" title="React JS" /></div>
					<div><img className="logo" src={"/assets/images/node-logo.png"} alt="Node JS" title="Node JS" /></div>
					<div><img className="logo" src={"/assets/images/sass-logo.png"} alt="SASS" title="SASS" /></div>
					<div><img className="logo" src={"/assets/images/html5-logo.png"} alt="HTML 5" title="HTML 5" /></div>

			</div>

		)

	}

}




export default FeaturedLang;
