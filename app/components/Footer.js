import React from 'react'
import { Link } from 'react-router'


class Footer extends React.Component {

	constructor(){
		super();

		this.state = {
			social: [
				{ platform: "Github", logo: "/assets/images/github-logo.png", url: "https://github.com/masonposch"},
				{ platform: "LinkedIn", logo: "/assets/images/linkedin-logo.png", url: "https://www.linkedin.com/in/mason-posch-7486b599/" },
				{ platform: "Bitbucket", logo: "/assets/images/bitbucket-logo.png", url: "https://bitbucket.org/masonposch/" },
			]
		}
	}

	render() {

		var socialLinks = this.state.social.map(function(d){
			return(
				<a key={d.platform} href={d.url} target="_blank">
					<img src={d.logo} alt={d.platform} title={d.platform} />
				</a>
			);
		}.bind(this));

		return(

			<div className="footer">
				<div className="contactSocial">
					<div className="contactInfo">
						<p><b>Austin, TX</b></p>
						<a href="mailto:masonposch@gmail.com">Contact by email</a>
					</div>
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