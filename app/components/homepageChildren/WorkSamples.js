import React from 'react'
import ReactDOM from 'react-dom'




class WorkSamples extends React.Component {

	constructor() {
		super()

		//Create the state of each project, along with all attributes for the given project
		this.state = {
			projects: [
				{ title: "Bake A Wish", image: "/assets/images/bake-a-wish-logo.png", alt: "Bake A Wish", url: "http://bakeawish.wpengine.com/", target: "_blank" },
				{ title: "Homeside", image: "/assets/images/homeside-logo.png", alt: "Homeside", url: "https://mmsk-homeside.herokuapp.com/#/login", target: "_blank" },
				{ title: "Votery", image: "/assets/images/votery-logo.png", alt: "Votery", url: "https://morning-garden-54466.herokuapp.com/votery", target: "_blank" },
				{ title: "Buyak", image: "/assets/images/buyak-logo.png", alt: "Buyak", url: "https://quiet-peak-65065.herokuapp.com/", target: "_blank" }
			]
		}
	}

	render() {
		//Map through each project, so that they all display dynamically
		var project = this.state.projects.map(function(d) {
			return(
				//Individual key for each project being mapped
				<a key={d.title} href={d.url} target={d.target} className="project">
						<img src={d.image} title={d.title} alt={d.alt} />
				</a>
			);
		}.bind(this));

		return(

			<div className="featuredProjects">
				{project}
			</div>

		)

	}

}

export default WorkSamples;



// var checks = this.state.data.map(function(d) {
//     return (
//         <div key={d.id} className="checkbox col-lg-3 col-sm-6">
//             <input type="checkbox" data-id={d.id} checked={d.selected} onChange={this.changeSelection.bind(this, d.id)}/>
//             {d.id}
//             <br />
//         </div>
//     );
// }.bind(this));
// return (
// 	<div>
//         {checks}
//     </div>
// );