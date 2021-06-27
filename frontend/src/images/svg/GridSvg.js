import React from 'react';

const GridSvg = ({ selected, select }) => {

    return (
        <div onClick={select}>
            {selected ?
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4998 4.66663H5.83317C5.18884 4.66663 4.6665 5.18896 4.6665 5.83329V10.5C4.6665 11.1443 5.18884 11.6666 5.83317 11.6666H10.4998C11.1442 11.6666 11.6665 11.1443 11.6665 10.5V5.83329C11.6665 5.18896 11.1442 4.66663 10.4998 4.66663Z" fill="#3880EC" stroke="#3880EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1668 4.66663H17.5002C16.8558 4.66663 16.3335 5.18896 16.3335 5.83329V10.5C16.3335 11.1443 16.8558 11.6666 17.5002 11.6666H22.1668C22.8112 11.6666 23.3335 11.1443 23.3335 10.5V5.83329C23.3335 5.18896 22.8112 4.66663 22.1668 4.66663Z" fill="#3880EC" stroke="#3880EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.4998 16.3334H5.83317C5.18884 16.3334 4.6665 16.8557 4.6665 17.5V22.1667C4.6665 22.811 5.18884 23.3334 5.83317 23.3334H10.4998C11.1442 23.3334 11.6665 22.811 11.6665 22.1667V17.5C11.6665 16.8557 11.1442 16.3334 10.4998 16.3334Z" fill="#3880EC" stroke="#3880EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1668 16.3334H17.5002C16.8558 16.3334 16.3335 16.8557 16.3335 17.5V22.1667C16.3335 22.811 16.8558 23.3334 17.5002 23.3334H22.1668C22.8112 23.3334 23.3335 22.811 23.3335 22.1667V17.5C23.3335 16.8557 22.8112 16.3334 22.1668 16.3334Z" fill="#3880EC" stroke="#3880EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                :
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4998 4.66675H5.83317C5.18884 4.66675 4.6665 5.18908 4.6665 5.83341V10.5001C4.6665 11.1444 5.18884 11.6667 5.83317 11.6667H10.4998C11.1442 11.6667 11.6665 11.1444 11.6665 10.5001V5.83341C11.6665 5.18908 11.1442 4.66675 10.4998 4.66675Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1668 4.66675H17.5002C16.8558 4.66675 16.3335 5.18908 16.3335 5.83341V10.5001C16.3335 11.1444 16.8558 11.6667 17.5002 11.6667H22.1668C22.8112 11.6667 23.3335 11.1444 23.3335 10.5001V5.83341C23.3335 5.18908 22.8112 4.66675 22.1668 4.66675Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.4998 16.3333H5.83317C5.18884 16.3333 4.6665 16.8556 4.6665 17.4999V22.1666C4.6665 22.8109 5.18884 23.3333 5.83317 23.3333H10.4998C11.1442 23.3333 11.6665 22.8109 11.6665 22.1666V17.4999C11.6665 16.8556 11.1442 16.3333 10.4998 16.3333Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.1668 16.3333H17.5002C16.8558 16.3333 16.3335 16.8556 16.3335 17.4999V22.1666C16.3335 22.8109 16.8558 23.3333 17.5002 23.3333H22.1668C22.8112 23.3333 23.3335 22.8109 23.3335 22.1666V17.4999C23.3335 16.8556 22.8112 16.3333 22.1668 16.3333Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }
        </div>
    );
};


export default GridSvg;