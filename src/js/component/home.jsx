import React from "react";
import Counter1 from "./counter1";
import calculateSeconds from "./time";
import PropTypes from "prop-types";
import SimpleCounter from "./simpleCounter";


const Home = ({counter}) => {
	return (
	  <div className="Home">
		<h1>{PropTypes.counter}</h1>
		<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 1000)}
			hundredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
		/>
	  </div>
	);
  }
  
Home.propTypes = {
	counter: PropTypes.number
}

export default Home;
