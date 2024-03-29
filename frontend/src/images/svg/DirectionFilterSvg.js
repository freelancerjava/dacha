import React from 'react';
import PropTypes from 'prop-types';

const DirectionFilterSvg = (props) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V14.25" stroke="#002944" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V3.75" stroke="#002944" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

DirectionFilterSvg.propTypes = {};

export default DirectionFilterSvg;