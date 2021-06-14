import React from 'react';

const MenuLikeSvg = ({ selected, select }) => {

    return (
        <div onClick={select}>
            {selected ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28002 2.50064C8.91002 2.5198 9.52002 2.6298 10.111 2.8308H10.17C10.21 2.8498 10.24 2.8708 10.26 2.8898C10.481 2.9608 10.69 3.0408 10.89 3.1508L11.27 3.3208C11.42 3.4008 11.6 3.5498 11.7 3.6108C11.8 3.6698 11.91 3.7308 12 3.7998C13.111 2.9508 14.46 2.4908 15.85 2.50064C16.481 2.50064 17.111 2.5898 17.71 2.7908C21.401 3.9908 22.731 8.0408 21.62 11.5808C20.99 13.3898 19.96 15.0408 18.611 16.3898C16.68 18.2598 14.561 19.9198 12.28 21.3498L12.03 21.5008L11.77 21.3398C9.48102 19.9198 7.35002 18.2598 5.40102 16.3798C4.06102 15.0308 3.03002 13.3898 2.39002 11.5808C1.26002 8.0408 2.59002 3.9908 6.32102 2.7698C6.61102 2.6698 6.91002 2.5998 7.21002 2.5608H7.33002C7.61102 2.5198 7.89002 2.50064 8.17002 2.50064H8.28002ZM17.19 5.6608C16.78 5.5198 16.33 5.7408 16.18 6.1608C16.04 6.5808 16.26 7.0408 16.68 7.1898C17.321 7.4298 17.75 8.0608 17.75 8.7598V8.7908C17.731 9.0198 17.8 9.2408 17.94 9.4108C18.08 9.5808 18.29 9.6798 18.51 9.7008C18.92 9.6898 19.27 9.3608 19.3 8.9398V8.8208C19.33 7.4198 18.481 6.1508 17.19 5.6608Z" fill="#3880EC" />
                </svg>
                :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2345 4.03912C13.8605 3.01112 16.0205 2.72712 17.8865 3.32512C21.9455 4.63412 23.2055 9.05912 22.0785 12.5801C20.3395 18.1101 12.9125 22.2351 12.5975 22.4081C12.4855 22.4701 12.3615 22.5011 12.2375 22.5011C12.1135 22.5011 11.9905 22.4711 11.8785 22.4101C11.5655 22.2391 4.19247 18.1751 2.39547 12.5811C2.39447 12.5811 2.39447 12.5801 2.39447 12.5801C1.26647 9.05812 2.52247 4.63212 6.57747 3.32512C8.48147 2.70912 10.5565 2.98012 12.2345 4.03912ZM7.03747 4.75312C3.75647 5.81112 2.93247 9.34012 3.82347 12.1231C5.22547 16.4851 10.7645 20.0121 12.2365 20.8851C13.7135 20.0031 19.2925 16.4371 20.6495 12.1271C21.5405 9.34112 20.7135 5.81212 17.4275 4.75312C15.8355 4.24212 13.9785 4.55312 12.6965 5.54512C12.4285 5.75112 12.0565 5.75512 11.7865 5.55112C10.4285 4.53012 8.65447 4.23112 7.03747 4.75312ZM16.4675 6.73902C17.8305 7.18002 18.7855 8.38702 18.9025 9.81402C18.9355 10.227 18.6285 10.589 18.2155 10.622C18.1945 10.624 18.1745 10.625 18.1535 10.625C17.7665 10.625 17.4385 10.328 17.4065 9.93602C17.3405 9.11402 16.7905 8.42002 16.0075 8.16702C15.6125 8.03902 15.3965 7.61602 15.5235 7.22302C15.6525 6.82902 16.0715 6.61502 16.4675 6.73902Z" fill="#BCBEC1" />
                </svg>
            }
        </div>
    );
};


export default MenuLikeSvg;