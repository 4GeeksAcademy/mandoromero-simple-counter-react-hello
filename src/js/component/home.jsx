import React from "react";
import calculateSeconds from "./time";
import PropTypes from "prop-types";
import SimpleCounter from "./simpleCounter";
import ClockLogo from "./clockLogo";

const Home = ({counter}) => {
	return (
	  <div className="Home">
		<h1>{PropTypes.counter}</h1>
		<ClockLogo />
		<SimpleCounter
			hundredthousandsDigit = {calculateSeconds(counter, 100000)} 
		/>
		<SimpleCounter
			tenthousandsDigit = {calculateSeconds(counter, 10000)} 
		/>	
		<SimpleCounter
			thousandsDigit = {calculateSeconds(counter, 1000)}
		/>
		<SimpleCounter 
			hundredsDigit = {calculateSeconds(counter, 100)}
		/>
		<SimpleCounter 	
			tensDigit = {calculateSeconds(counter, 10)}
		/>
		<SimpleCounter 	
			onesDigit = {calculateSeconds(counter, 1)}
		/>
	  </div>
	);
  }
  
Home.propTypes = {
	counter: PropTypes.number
}

export default Home;
