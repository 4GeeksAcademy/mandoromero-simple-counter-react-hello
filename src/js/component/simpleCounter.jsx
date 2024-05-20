import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {

    return(
        <div>
            <div>
                {props.thousandsDigit}
            </div>
            <div>
                {props.hundredsDigit}
            </div>
            <div>
                {props.tensDigit}
            </div>
            <div>
                {props.onesDigit}
            </div>
        </div>
    )
}

SimpleCounter.propTypes = {
    onesDigit:PropTypes.number,
    tensDigit:PropTypes.number,
    hundredsDigit:PropTypes.number,
    ThousandsDigit:PropTypes.number
}

export default SimpleCounter;