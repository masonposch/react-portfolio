import React from 'react'
import ReactDOM from 'react-dom'




class WorkSamples extends React.Component {

	constructor() {
		super()

		//Create the state of each project, along with all attributes for the given project
		this.state = {
			projects: [
				{
					title: "Bake A Wish",
					image: "/assets/images/bake-a-wish-logo.png",
					alt: "Bake A Wish", url: "http://bakeawishaustin.org/",
					target: "_blank",
					role: "Front-end development, Git version control",
					description: "A mobile-friendly, passion project by the front-end development team at Kasasa. Local Austin nonprofit, Bake a Wish, reached out to us to create a custom Wordpress website for them.",
				},
				{
					title: "Homeside",
					image: "/assets/images/homeside-logo.png",
					alt: "Homeside", url: "https://mmsk-homeside.herokuapp.com/#/login",
					target: "_blank",
					role: "Back-end development",
					description: "Group project with The Coding Bootcamp at UT Austin. Purpose: Connect home owners with local professionals for a cheaper home improvement alternative. Guidelines: Two weeks to develop a web application using MERN stack technologies.",
				},
				{
					title: "Votery",
					image: "/assets/images/votery-logo.png",
					alt: "Votery", url: "https://morning-garden-54466.herokuapp.com/votery",
					target: "_blank",
					role: "Back-end development",
					description: "Group project with The Coding Bootcamp at UT Austin. Purpose: Allow citizens to easily track their local congressional representative's voting record. Guidelines: Two weeks to develop a web application utilizing a MySQL database.",
				},
				{
					title: "Buyak",
					image: "/assets/images/buyak-logo.png",
					alt: "Buyak", url: "https://quiet-peak-65065.herokuapp.com/",
					target: "_blank",
					role: "Front-end development",
					description: "Group project with The Coding Bootcamp at UT Austin. Purpose: Compare prices of products with multiple retailers at once. Guidelines: Two weeks to develop a web application utilizing Google's Firebase and any web APIs.",
				}
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
						<div className="summary">
							<p className="role"><strong>Role:</strong> {d.role}</p>
							<p className="description">{d.description}</p>
						</div>
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
