var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<h3> Hello World! </h3>
			</div>
			)
	}
});

//React.render(<HelloWorld/>, document.getElementById('helloWorld'));

	var GreatDane = React.createClass({
		render: function(){
			return (
				<div>
					<h3> Great Dane!! </h3>
				</div>
				)
		}

	});

//React.render(<GreatDane/>, document.getElementById('greatDane'));


var SeeYa = React.createClass({


	render: function(){

		var sentence = "see ya later";

		return (
			<div>
				<h1>{sentence}</h1>
			</div>
			)
	}
});

//React.render(<SeeYa/>, document.getElementById('sentence'));

var App = React.createClass({
	render: function(){
		return(
			<div>
				< HelloWorld />
				< SeeYa />
				< GreatDane />
			</div>
			)
	}
});

React.render(<App/>, document.getElementById('App'));