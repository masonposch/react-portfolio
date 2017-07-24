import React from 'react'
import ReactDOM from 'react-dom'




class WorkSamples extends React.Component {

	constructor() {
		super()

		//Create the state of each project, along with all attributes for the given project
		this.state = {
			projects: [
				{ title: "Bake A Wish", image: "/assets/images/placeholder.jpg", alt: "Bake A Wish" },
				{ title: "Homeside", image: "/assets/images/placeholder.jpg", alt: "Homeside" },
				{ title: "Votery", image: "/assets/images/placeholder.jpg", alt: "Votery" },
				{ title: "Buyak", image: "/assets/images/placeholder.jpg", alt: "Buyak" }
			]
		}
	}

	render() {
		//Map through each project, so that they all display dynamically
		var project = this.state.projects.map(function(d) {
			return(
				//Individual key for each project being mapped
				<div key={d.title} className="project">
					<img src={d.image} title={d.title} alt={d.alt} />
				</div>
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