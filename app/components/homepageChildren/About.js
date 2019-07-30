import React from 'react'
import ReactDOM from 'react-dom'



class About extends React.Component {

	constructor() {
		super();

		this.state = {
			aboutImage: '/assets/images/about-2.png',
		}

		this.onHover = this.onHover.bind(this);
		this.offHover = this.offHover.bind(this);
	}


	onHover(){
		this.setState({aboutImage: '/assets/images/about-2.png'})
	}

	offHover(){
		this.setState({aboutImage: '/assets/images/about-2.png'})
	}

	render() {

		return(

			<div className="about-section">
				<div className="mobile">
					<img src={this.state.aboutImage} onMouseOver={this.onHover} onMouseLeave={this.offHover} />
				</div>
				<div>
					<p>Full-stack web developer from Austin, Texas. I am currently focusing on front-end and MERN stack technologies, with an emphasis in React.js.</p>
				</div>
			</div>

		)

	}

}




export default About;
