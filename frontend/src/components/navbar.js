import React, { useState } from 'react';
import { Link } from 'gatsby';
import MenuHomeSvg from '../images/svg/MenuHomeSvg';
import MenuLikeSvg from '../images/svg/MenuLikeSvg';
import MenuChatSvg from '../images/svg/MenuChatSvg';
import MenuCategorySvg from '../images/svg/MenuCategorySvg';


const MenuItem = ({name, select}) => {
        switch(name){
            case 'home': return(<Link to='/' activeClassName='active-page' ><div><MenuHomeSvg selected={select}/><span>Главная</span></div></Link>)
            case 'category': return(<Link to='/categories' activeClassName='active-page' ><div><MenuCategorySvg selected={select}/><span>Категории</span></div></Link>)
            case 'like': return(<Link to='/like' activeClassName='active-page' ><div><MenuLikeSvg selected={select}/><span>Избранное</span></div></Link>)
            case 'chat': return(<Link to='/chat' activeClassName='active-page' ><div><MenuChatSvg selected={select}/><span>Чат</span></div></Link>)
        }
}
const Navbar = () => {
    const [select, setselect] = useState(false);
    return (
        <ul className='navbar'>
            <li><MenuItem name='home' select={select} /></li>           
            <li><MenuItem name='category' select={select} /></li>           
            <li><MenuItem name='like' select={select} /></li>           
            <li><MenuItem name='chat' select={select} /></li>           
        </ul>
    );
};


export default Navbar;