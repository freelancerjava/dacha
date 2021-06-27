import React from 'react';

const ListSvg = ({ selected, select }) => {

    return (
        <div onClick={select}>
            {selected ?
                
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9998 4.66675H6.99984C5.71117 4.66675 4.6665 5.71142 4.6665 7.00008V9.33341C4.6665 10.6221 5.71117 11.6667 6.99984 11.6667H20.9998C22.2885 11.6667 23.3332 10.6221 23.3332 9.33341V7.00008C23.3332 5.71142 22.2885 4.66675 20.9998 4.66675Z" fill="#3880EC" stroke="#3880EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.9998 16.3333H6.99984C5.71117 16.3333 4.6665 17.3779 4.6665 18.6666V20.9999C4.6665 22.2886 5.71117 23.3333 6.99984 23.3333H20.9998C22.2885 23.3333 23.3332 22.2886 23.3332 20.9999V18.6666C23.3332 17.3779 22.2885 16.3333 20.9998 16.3333Z" fill="#3880EC" stroke="#3880EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                :
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9998 4.66663H6.99984C5.71117 4.66663 4.6665 5.71129 4.6665 6.99996V9.33329C4.6665 10.622 5.71117 11.6666 6.99984 11.6666H20.9998C22.2885 11.6666 23.3332 10.622 23.3332 9.33329V6.99996C23.3332 5.71129 22.2885 4.66663 20.9998 4.66663Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.9998 16.3334H6.99984C5.71117 16.3334 4.6665 17.378 4.6665 18.6667V21C4.6665 22.2887 5.71117 23.3334 6.99984 23.3334H20.9998C22.2885 23.3334 23.3332 22.2887 23.3332 21V18.6667C23.3332 17.378 22.2885 16.3334 20.9998 16.3334Z" stroke="#BCBEC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }
        </div>
    );
};


export default ListSvg;