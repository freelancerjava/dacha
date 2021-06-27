import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({open, setOpen}) => {
    const node = React.useRef();
    return (
        <div className={`menu-btn ${open ? 'open':''}`} onClick={()=>{
            setOpen(!open)
        }}>
            <div class="menu-btn__burger">
            </div>
        </div>
    );
};

Menu.propTypes = {};

export default Menu;
