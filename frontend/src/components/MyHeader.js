import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
//https://www.figma.com/file/Qpr6b0tBlNXHgY9u2Qvrby/topdacha-UI?node-id=0%3A1

import logo from '~/images/logtopdachalogo.png'
import russia from '~/images/russia.png'
import { Select } from 'antd';
import Menu from './Menu';
import CallSvg from '../images/svg/CallSvg';
import CloseSvg from '../images/svg/CloseSvg';

import { useOnClickOutside, useOnKeypress } from "~/helpers/hooks"

const MyHeader = () => {

    
    const [call, setcall] = useState(false);

    const modal = useRef()
    useOnClickOutside(modal, () => setcall(false))
    useOnKeypress(() => setcall(false))

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <div className='header'>
                <div className="left">
                    <span className='menu'>
                        <Menu />
                    </span>
                    <Link className="mx-2 text-lg mb-4" to="/">
                        <img src={logo} alt="strapi catalog logo" className="logo" />
                    </Link>
                </div>
                <div className="right">
                    {/* <Select defaultValue="ru" onChange={handleChange}>
                    <Option value="ru"><span className="lang-opt"><img src={russia} /> Ру </span></Option>
                    <Option value="uz"><span className="lang-opt"><img src={russia} /> EN </span></Option>
                    <Option value="en"><span className="lang-opt"><img src={russia} /> UZ </span></Option>
                </Select> */}
                    <CallSvg onClick={() => setcall(!call)} />
                </div>
            </div>
            <div ref={modal} className={`contacts ${call ? 'move' : 'movedown'}`}>
                <span className='dragger'></span>
                <div className='title'>
                    <span className='close'><CloseSvg onClick={() => setcall(!call)} /></span>
                    <span>Контакты</span>
                </div>
                <div className='num-title'>Номер телефона</div>
                <div className='number'>998 97 455-59-42</div>
                <a className='button'>Позвонить</a>

            </div>
        </>
    );
};


export default MyHeader;