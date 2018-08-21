import React from 'react'
import ReactDOM from 'react-dom'



class Testimonials extends React.Component {

	constructor() {
		super();

		this.state = {
			recommendations: [
				{
					name: "Keegan Kelly",
					position: "Test Engineer at Scientific Games",
					testimonial: "Group members like Mason make collaborating on a project worth it. I got the opportunity to work with Mason during our two week project (Buyak) while attending the UT Bootcamp at Austin. Mason makes designing and building the front-end of a website look effortless, but I found his eagerness to overcome challenges and achieve our project's goals very impressive. He always seemed to be pushing forward while ensuring all aspects of the project matched our vision. Mason has a natural ability to connect with those around him, which makes collaborating with him a fun social experience. I would recommend Mason for any team requiring an awesome web developer!",
				},
				{
					name: "Manali Matkar",
					position: "Consultant at Media Sourcery, Inc.",
					testimonial: "True creative and thinking designer, Mason has the innate ability to understand the requirements and tailor output accordingly. Fresh and out of the box vision and ability to implement that vision in compliance with industry standards makes Mason a asset to work with.",
				},
			]
		}

	}


	render() {

		var testimonials = this.state.recommendations.map(function(d) {
			return  (
				<div className="testimonial">
					<i className="fas fa-quote-left quote left"></i>
					<p>{d.testimonial}</p>
					<br />
					<p className="name">{d.name}, {d.position}</p>
					<i className="fas fa-quote-right quote right"></i>
				</div>
			);		
		}.bind(this));

		return(

			<div className="testimonial-section">
				{testimonials}
			</div>

		)

	}

}


export default Testimonials;