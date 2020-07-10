<h1 style="text-align: center; color: #1a1aff">React Complet Guide</h1>

<h3 style="text-align: center;">Full Code :-<a href="https://github.com/ram-chadar/Complete-React-Guide">Download full Code from Here</a></h3>

<h2 style="text-align: center; color: #ff1a1a">46. Passing a method reference between components</h2>

<p style="font-size: 20px">
	The lection right now is about passing method references. So basically the instructor passes method references as props in the Person tag inside the render method of App.js. And in the Person component the switchNameHandler gets executed when the button gets clicked and the nameChangedHandler gets executed when the input textfield gets modified.
</p>

<ul><li style="font-size:25px; color: #3399ff">Person.js</li></ul>

	import React from "react";
	const person = (props) =&gt{
		return (
       		&ltdiv&gt 
        	 &ltp onClick={props.click}> name :- {props.name} and age :- {props.age} &lt/p&gt
         		&ltp&gt{props.children}&lt/p&gt
   				&lt/div&gt
   )
};
export default person;


