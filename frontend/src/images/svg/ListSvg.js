import React from 'react';

const ListSvg = ({ selected, select }) => {

    return (
        <div onClick={select}>
            {selected ?
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.66666H6.99999C5.71133 4.66666 4.66666 5.71133 4.66666 6.99999V9.33332C4.66666 10.622 5.71133 11.6667 6.99999 11.6667H21C22.2887 11.6667 23.3333 10.622 23.3333 9.33332V6.99999C23.3333 5.71133 22.2887 4.66666 21 4.66666Z" fill="#8CC63F" stroke="#8CC63F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 16.3333H6.99999C5.71133 16.3333 4.66666 17.378 4.66666 18.6667V21C4.66666 22.2887 5.71133 23.3333 6.99999 23.3333H21C22.2887 23.3333 23.3333 22.2887 23.3333 21V18.6667C23.3333 17.378 22.2887 16.3333 21 16.3333Z" fill="#8CC63F" stroke="#8CC63F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                :
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.66666H7C5.71133 4.66666 4.66666 5.71133 4.66666 6.99999V9.33332C4.66666 10.622 5.71133 11.6667 7 11.6667H21C22.2887 11.6667 23.3333 10.622 23.3333 9.33332V6.99999C23.3333 5.71133 22.2887 4.66666 21 4.66666Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 16.3333H7C5.71133 16.3333 4.66666 17.378 4.66666 18.6667V21C4.66666 22.2887 5.71133 23.3333 7 23.3333H21C22.2887 23.3333 23.3333 22.2887 23.3333 21V18.6667C23.3333 17.378 22.2887 16.3333 21 16.3333Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }
        </div>
    );
};


export default ListSvg;