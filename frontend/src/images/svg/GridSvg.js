import React from 'react';

const GridSvg = ({ selected, select }) => {

    return (
        <div onClick={select}>
            {selected ?
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 4.66666H5.83333C5.189 4.66666 4.66666 5.18899 4.66666 5.83332V10.5C4.66666 11.1443 5.189 11.6667 5.83333 11.6667H10.5C11.1443 11.6667 11.6667 11.1443 11.6667 10.5V5.83332C11.6667 5.18899 11.1443 4.66666 10.5 4.66666Z" fill="#8CC63F" stroke="#8CC63F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1667 4.66666H17.5C16.8557 4.66666 16.3333 5.18899 16.3333 5.83332V10.5C16.3333 11.1443 16.8557 11.6667 17.5 11.6667H22.1667C22.811 11.6667 23.3333 11.1443 23.3333 10.5V5.83332C23.3333 5.18899 22.811 4.66666 22.1667 4.66666Z" fill="#8CC63F" stroke="#8CC63F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5 16.3333H5.83333C5.189 16.3333 4.66666 16.8557 4.66666 17.5V22.1667C4.66666 22.811 5.189 23.3333 5.83333 23.3333H10.5C11.1443 23.3333 11.6667 22.811 11.6667 22.1667V17.5C11.6667 16.8557 11.1443 16.3333 10.5 16.3333Z" fill="#8CC63F" stroke="#8CC63F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1667 16.3333H17.5C16.8557 16.3333 16.3333 16.8557 16.3333 17.5V22.1667C16.3333 22.811 16.8557 23.3333 17.5 23.3333H22.1667C22.811 23.3333 23.3333 22.811 23.3333 22.1667V17.5C23.3333 16.8557 22.811 16.3333 22.1667 16.3333Z" fill="#8CC63F" stroke="#8CC63F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                :
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 4.66666H5.83332C5.18899 4.66666 4.66666 5.18899 4.66666 5.83332V10.5C4.66666 11.1443 5.18899 11.6667 5.83332 11.6667H10.5C11.1443 11.6667 11.6667 11.1443 11.6667 10.5V5.83332C11.6667 5.18899 11.1443 4.66666 10.5 4.66666Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1667 4.66666H17.5C16.8557 4.66666 16.3333 5.18899 16.3333 5.83332V10.5C16.3333 11.1443 16.8557 11.6667 17.5 11.6667H22.1667C22.811 11.6667 23.3333 11.1443 23.3333 10.5V5.83332C23.3333 5.18899 22.811 4.66666 22.1667 4.66666Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5 16.3333H5.83332C5.18899 16.3333 4.66666 16.8557 4.66666 17.5V22.1667C4.66666 22.811 5.18899 23.3333 5.83332 23.3333H10.5C11.1443 23.3333 11.6667 22.811 11.6667 22.1667V17.5C11.6667 16.8557 11.1443 16.3333 10.5 16.3333Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1667 16.3333H17.5C16.8557 16.3333 16.3333 16.8557 16.3333 17.5V22.1667C16.3333 22.811 16.8557 23.3333 17.5 23.3333H22.1667C22.811 23.3333 23.3333 22.811 23.3333 22.1667V17.5C23.3333 16.8557 22.811 16.3333 22.1667 16.3333Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }
        </div>
    );
};


export default GridSvg;