import React from 'react'
import ReactDOM from 'react-dom'



class Hero extends React.Component{

	constructor(){
		super();
		this.state = {
			greeting: 'Welcome',
			title: '',
			blur: 0,
		}

		this.imageBlur = this.imageBlur.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
	}

	imageBlur() {
		var top = window.pageYOffset/5;
		this.setState({blur: top})
	}


	render(){

		setTimeout(() => {
			this.setState({ greeting: "My name is Mason Posch" });
			this.setState({ title: "Front-End Developer" });
		}, 3000)

		console.log(this.state.blur)

		return (
				<div className="background-video" style={{filter: `grayscale(${this.state.blur}%)`}}>
				  <video playsInline="playsinline" autoPlay muted loop id="myVideo" className="noMobile">
				      <source src="/assets/video/mason-drums.mp4" type="video/mp4"></source>
					</video>
					<div className="background-text text-center">
						<h1>{this.state.greeting}</h1>
						<h3>{this.state.title}</h3>
						<button>View My Resume</button>
					</div>
				</div>
		)
	}


	componentDidMount() {
	    window.addEventListener('scroll', this.imageBlur);
	}
}



export default Hero;
