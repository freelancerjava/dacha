import React from 'react';
const CloseSvg = (props) => {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#BCBEC1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="#BCBEC1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
export default CloseSvg;
