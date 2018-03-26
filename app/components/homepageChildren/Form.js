import React from 'react'
import ReactDOM from 'react-dom'



class Form extends React.Component {

	constructor() {
		super();

	}


	render() {

		return(

			<div className="form-section">

				<h2>I don't quite know everything yet</h2>
				<p>But maybe with some advice, I might get there eventually.</p>

				<form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSd3b9jyddY4EAPqUH-TsrFFKuzXg_jVwAPPBerGUG7Tbp82lw/formResponse">
					<p>Mason, I really love what I'm seeing. Seriously, it's great. But it'd also be nice to see more experience with:</p>
					<input type="checkbox" name="entry.161519499" id="option1" value="C++"/>
					<label for="option1">C++</label>
					<input type="checkbox" name="entry.161519499" id="option2" value="Java"/>
					<label for="option2">Java</label>
					<input type="checkbox" name="entry.161519499" id="option3" value=".NET"/>
					<label for="option3">.NET</label>
					<input type="checkbox" name="entry.161519499" id="option4" value="Python"/>
					<label for="option4">Python</label>
					<input type="checkbox" name="entry.161519499" id="option5" value="Ruby"/>
					<label for="option5">Ruby</label>
					<input type="checkbox" name="entry.161519499" id="option6" value="MORE FRONT-END FRAMEWORKS"/>
					<label for="option6">MORE FRONT-END FRAMEWORKS</label>
					<input type="checkbox" name="entry.161519499" id="option7" value="ALWAYS MORE DATABASE LANGUAGES"/>
					<label for="option7">ALWAYS MORE DATABASE LANGUAGES</label>

					<label for="anythingElse">Is there anything else you'd like to let me know?</label>
  					<textarea name="entry.2059037289" id="anythingElse"></textarea>

  					<label for="nameBusiness">Your name, business?</label>
  					<input name="entry.359026380" type="text" id="nameBusiness"/>

  					<input class="button" type="submit" value="Submit" />

				</form>
				
			</div>

		)

	}

}




export default Form; 