import React from 'react'
import ReactDOM from 'react-dom'




class WorkSamples extends React.Component {

	constructor() {
		super()

		//Create the state of each project, along with all attributes for the given project
		this.state = {
			projects: [
			    {
					title: "Kasasa Corporate Website",
					image: "/assets/images/kasasa-logo.png",
					specialClass: "kasasa-logo",
					alt: "Kasasa", url: "https://kasasa.com",
					target: "_blank",
					role: "Front-end development, HUBL, HubSpot",
					description: "A complete rebuild of Kasasa.com using HubSpot CMS",
				},
			    {
					title: "SleptInMusic.com",
					image: "/assets/images/slept-in.png",
					specialClass: "slept-in-logo",
					alt: "Slept In", url: "http://www.sleptinmusic.com/",
					target: "_blank",
					role: "Front-end development, React.js",
					description: "A mobile-friendly website for the my band, Slept In",
				},
			    {
					title: "The Kasasa Exchange",
					image: "/assets/images/kasasa-exchange.png",
					specialClass: "kasasa-exchange-logo",
					alt: "The Kasasa Exchange", url: "https://kasasa.com/exchange",
					target: "_blank",
					role: "Front-end development, HUBL, HubSpot",
					description: "A mobile-friendly landing page to showcase real-life examples of Kasasa Marketing Materials",
				},
				{
					title: "Kasasa Nation Home Page Refresh",
					image: "/assets/images/kasasa-nation.png",
					specialClass: "kasasa-logo",
					alt: "Kasasa Nation Home Page", url: "https://kasasa.com/nation/index.html",
					target: "_blank",
					role: "Front-end development",
					description: "A mobile-friendly refresh for the Kasasa Nation Home Page. Along with highlights section with counting functionality",
				},
				{
					title: "WestStar CU Landing Page",
					image: "/assets/images/weststar-logo.png",
					specialClass: "weststar-logo",
					alt: "WestStar CU Landing Page", url: "https://www.weststar.org/home/auto-loans.html",
					target: "_blank",
					role: "Front-end development",
					description: "A mobile-friendly, ADA compliant landing page for marketing purposes, built through the role of Front-End Developer at Kasasa.",
				},
				{
					title: "Bake A Wish",
					image: "/assets/images/bake-a-wish-logo.png",
					specialClass: "",
					alt: "Bake A Wish", url: "http://bakeawishaustin.org/",
					target: "_blank",
					role: "Front-end development, Git version control",
					description: "A mobile-friendly, passion project by the front-end development team at Kasasa. Local Austin nonprofit, Bake a Wish, reached out to us to create a custom Wordpress website for them.",
				},
				{
					title: "Homeside",
					image: "/assets/images/homeside-logo.png",
					specialClass: "",
					alt: "Homeside", url: "https://mmsk-homeside.herokuapp.com/#/login",
					target: "_blank",
					role: "Back-end development",
					description: "Group project with The Coding Bootcamp at UT Austin. Purpose: Connect home owners with local professionals for a cheaper home improvement alternative. Guidelines: Two weeks to develop a web application using MERN stack technologies.",
				},
				{
					title: "Votery",
					image: "/assets/images/votery-logo.png",
					specialClass: "",
					alt: "Votery", url: "https://morning-garden-54466.herokuapp.com/votery",
					target: "_blank",
					role: "Back-end development",
					description: "Group project with The Coding Bootcamp at UT Austin. Purpose: Allow citizens to easily track their local congressional representative's voting record. Guidelines: Two weeks to develop a web application utilizing a MySQL database.",
				},
				// {
				// 	title: "Buyak",
				// 	image: "/assets/images/buyak-logo.png",
				// 	specialClass: "",
				// 	alt: "Buyak", url: "https://quiet-peak-65065.herokuapp.com/",
				// 	target: "_blank",
				// 	role: "Front-end development",
				// 	description: "Group project with The Coding Bootcamp at UT Austin. Purpose: Compare prices of products with multiple retailers at once. Guidelines: Two weeks to develop a web application utilizing Google's Firebase and any web APIs.",
				// }
			]
		}
	}

	render() {
		//Map through each project, so that they all display dynamically
		var project = this.state.projects.map(function(d) {
			return(
				//Individual key for each project being mapped
				<a key={d.title} href={d.url} target={d.target} className="project">
						<img src={d.image} title={d.title} alt={d.alt} className={d.specialClass}/>
						<div className="summary">
							<p className="role"><strong>Role:</strong> {d.role}</p>
							<p className="description">{d.description}</p>
						</div>
				</a>
			);
		}.bind(this));

		return(

			<div className="featuredProjects" id="featuredWork">
				{project}
			</div>

		)

	}

}

export default WorkSamples;
