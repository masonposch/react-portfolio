import React from 'react'
import ReactDOM from 'react-dom'



class Hero extends React.Component{

	constructor(){
		super();
		this.state = { greeting: 'Welcome' }
	}


	render(){

		setTimeout(() => {
			this.setState({ greeting: "My name is Mason Posch" });
		}, 3000)

		return (
				<div className="hero-image">
					<div className="hero-text text-center">
						<h1>{this.state.greeting}</h1>
						<button>View My Resume</button>
					</div>
				</div>
		)
	}
}



export default Hero;