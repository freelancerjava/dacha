import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <h1>Лучшие гостиницы на чарваке</h1>
            <h4>Подборка из 10 мест от сервиса TopDacha</h4>
            <Link to="/">Подробнее</Link>
        </div>
    );
};

TopBanner.propTypes = {};

export default TopBanner;