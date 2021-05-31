import React from 'react';
import { Link } from 'gatsby';

import logo from '~/images/logtopdachalogo.png'
import russia from '~/images/russia.png'
import { Select } from 'antd';

const MyHeader = () => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className='header'>
            <div className="left">
                <span className='menu'></span>
                <Link className="mx-2 text-lg w-40 mb-4" to="/">
                    <img src={logo} alt="strapi catalog logo" />
                </Link>
            </div>
            <div className="right">
                <Select defaultValue="ru" onChange={handleChange} >
                    {/* <Option value="ru"><img src={russia} /> RU </Option> */}
                    <Option value="uz">Lucy</Option>
                    <Option value="en">yiminghe</Option>
                </Select>
            </div>
        </div>
    );
};


export default MyHeader;