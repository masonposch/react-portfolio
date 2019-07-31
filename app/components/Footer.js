import React from 'react'
import { Link } from 'react-router'


class Footer extends React.Component {

	constructor(){
		super();

		this.state = {
			social: [
				{ platform: "Resume", logo: "far fa-file-alt", url: "/assets/pdfs/resume_mason-posch.pdf" },
				{ platform: "Github", logo: "fab fa-github", url: "https://github.com/masonposch"},
				{ platform: "LinkedIn", logo: "fab fa-linkedin", url: "https://www.linkedin.com/in/mason-posch-7486b599/" },
			]
		}
	}

	render() {

		var socialLinks = this.state.social.map(function(d){
			return(
				<a key={d.platform} href={d.url} target="_blank">
					<i className={d.logo} aria-hidden="true"></i>
				</a>
			);
		}.bind(this));

		return(

			<div className="footer">
				<div className="contactSocial">
					<div className="social">
						{socialLinks}
					</div>
				</div>
				<div className="copyright">
					<p>&copy; 2017 | Made by <b>Mason Posch</b> | Find it all <a href="https://github.com/masonposch/react-portfolio" target="_blank">here</a>.</p>
				</div>
			</div>

		)
	}

}


export default Footer
