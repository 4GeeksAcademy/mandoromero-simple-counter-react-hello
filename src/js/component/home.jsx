import React from "react";
import calculateSeconds from "./time";
import PropTypes from "prop-types";
import SimpleCounter from "./simpleCounter";


const Home = ({counter}) => {
	return (
	  <div className="Home">
		<h1>{PropTypes.counter}</h1>
		<SimpleCounter classNAME="thousands" 
			thousandsDigit = {calculateSeconds(counter, 1000)}
		/>
		<SimpleCounter classNAME="hundreds" 
			hundredsDigit = {calculateSeconds(counter, 100)}
		/>
		<SimpleCounter classNAME="tens" 	
			tensDigit = {calculateSeconds(counter, 10)}
		/>
		<SimpleCounter classNAME="ones" 	
			onesDigit = {calculateSeconds(counter, 1)}
		/>
	  </div>
	);
  }
  
Home.propTypes = {
	counter: PropTypes.number
}

export default Home;
