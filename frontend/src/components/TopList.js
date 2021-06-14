import React, { useState } from 'react';


import GridSvg from '../images/svg/GridSvg';
import ListSvg from '../images/svg/ListSvg';
import Product from './Product';

const TopList = ({ topproducts }) => {
    const [grid, setgrid] = useState(true);
    return (
        <div className="top-list">
            <div className='title'>
                <h1>Топ объявления</h1>
                <span>
                    <GridSvg selected={grid} select={() => {
                        setgrid(true)
                    }} />
                    <ListSvg selected={!grid} select={() => {
                        setgrid(false)
                    }} />
                </span>
            </div>

            <div className="products">
                {topproducts.map(({ node }) => {
                    return (
                        <Product node={node}/>
                    )
                })}

            </div>
        </div>
    );
};


export default TopList;