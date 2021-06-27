import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const PrimaryBtn = ({text, ...props}) => {
    return (
        <Button {...props}>
            {text}
        </Button>
    );
};

PrimaryBtn.propTypes = {};

export default PrimaryBtn;