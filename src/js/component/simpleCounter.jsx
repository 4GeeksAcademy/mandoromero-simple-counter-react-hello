import React from "react";
import PropTypes from "prop-types";


const SimpleCounter = (props) => {

    return(
        <div>
            <div colorlassName="number">
                {props.hundredthousandsDigit}
            </div>
            <div className="number">
                {props.tenthousandsDigit}
            </div>
            <div className="number">
                {props.thousandsDigit}
            </div>
            <div className="number">
                {props.hundredsDigit}
            </div>
            <div className="number">
                {props.tensDigit}
            </div>
            <div className="number">
                {props.onesDigit}
            </div>
        </div>
    )
}

SimpleCounter.propTypes = {
    onesDigit:PropTypes.number,
    tensDigit:PropTypes.number,
    hundredsDigit:PropTypes.number,
    thousandsDigit:PropTypes.number,
    tenthousandsDigit:PropTypes.number,
    hundredthousandsDigit:PropTypes.number
}

export default SimpleCounter;