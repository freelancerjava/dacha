import React from 'react';

import PriceTagSvg from "../images/svg/PriceTagSvg";
import BigPinSvg from "../images/svg/BigPinSvg";
import AreaSvg from "../images/svg/AreaSvg";
import BedCountSvg from "../images/svg/BedCountSvg";
import MenCountSvg from "../images/svg/MenCountSvg";

const Icons = ({ icon }) => {
    switch (icon) {
        case "pricetags": return <span className='spec-icon'><PriceTagSvg /></span>
        case "bigpin": return <span className='spec-icon'><BigPinSvg /></span>
        case "area": return <span className='spec-icon'><AreaSvg /></span>
        case "bedCount": return <span className='spec-icon'><BedCountSvg /></span>
        case "menCount": return <span className='spec-icon'><MenCountSvg /></span>
        default: return <span className='spec-icon'>{icon}</span>
    }
}

export default Icons