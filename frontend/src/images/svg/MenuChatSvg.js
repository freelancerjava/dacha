import React from 'react';

const MenuChatSvg = ({ selected, select }) => {

    return (
        <div onClick={select}>
            {selected ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.02 2C17.7 2 22 6.65699 22 11.985C22 18.1642 16.96 22 12 22C10.36 22 8.54 21.5593 7.08 20.698C6.57 20.3876 6.14 20.1572 5.59 20.3375L3.57 20.9384C3.06 21.0986 2.6 20.698 2.75 20.1572L3.42 17.9139C3.53 17.6034 3.51 17.2729 3.35 17.0125C2.49 15.4301 2 13.6975 2 12.015C2 6.74712 6.21 2 12.02 2ZM16.59 10.7431C15.88 10.7431 15.31 11.314 15.31 12.025C15.31 12.7261 15.88 13.307 16.59 13.307C17.3 13.307 17.87 12.7261 17.87 12.025C17.87 11.314 17.3 10.7431 16.59 10.7431ZM11.98 10.7431C11.28 10.7331 10.7 11.314 10.7 12.015C10.7 12.7261 11.27 13.2969 11.98 13.307C12.69 13.307 13.26 12.7261 13.26 12.025C13.26 11.314 12.69 10.7431 11.98 10.7431ZM7.37 10.7431C6.66 10.7431 6.09 11.314 6.09 12.025C6.09 12.7261 6.67 13.307 7.37 13.307C8.08 13.2969 8.65 12.7261 8.65 12.025C8.65 11.314 8.08 10.7431 7.37 10.7431Z" fill="#3880EC" />
                </svg>
                :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.058 2.00008C16.2115 2.03077 19.9153 4.61803 21.3675 8.50387C22.8199 12.3901 21.7187 16.7681 18.5997 19.5079C15.4812 22.2473 10.9929 22.7804 7.31788 20.848L7.27208 20.8319C7.26493 20.8278 7.26378 20.8242 7.26224 20.8194L6.57971 20.4332C6.4407 20.3763 6.28665 20.3671 6.19261 20.3909C5.4831 20.646 4.75798 20.8554 4.02167 21.018L3.88671 21.0343C3.07616 21.0523 2.66776 20.5263 2.66776 19.7609L2.6873 19.597C2.87136 18.8357 3.10204 18.0865 3.36458 17.3927C3.40531 17.2613 3.39175 17.1192 3.32147 16.9875L3.13765 16.6292C1.51288 13.5227 1.63541 9.79358 3.46059 6.8001C5.28554 3.80701 8.54635 1.98613 12.058 2.00008ZM12.0484 3.39463L11.7675 3.39903C8.85494 3.48236 6.17338 5.03121 4.65196 7.52649C3.08168 10.1019 2.97627 13.3099 4.37662 15.9874L4.55755 16.3402C4.79818 16.7905 4.84853 17.3183 4.68389 17.8451C4.42804 18.5246 4.21419 19.2192 4.04356 19.9249L4.138 19.557L4.53273 19.4541C4.66823 19.4168 4.80406 19.3775 4.9406 19.3361L5.35272 19.2055L5.77133 19.0617C6.21354 18.9399 6.6837 18.9681 7.14685 19.159C7.24408 19.2059 7.36471 19.271 7.51677 19.3569L7.93909 19.5993C7.94625 19.6012 7.95251 19.6029 7.95729 19.6042L7.94496 19.6026L8.23269 19.7468C11.2582 21.2076 14.8626 20.778 17.4587 18.6466L17.6788 18.4596C20.3626 16.1021 21.31 12.3357 20.0605 8.99235C18.8109 5.64861 15.6231 3.42182 12.0484 3.39463ZM7.61596 10.8596C8.24606 10.8596 8.75732 11.37 8.75732 12.0002C8.75732 12.6304 8.24606 13.1408 7.61596 13.1408C6.98586 13.1408 6.4746 12.6304 6.4746 12.0002C6.4746 11.37 6.98586 10.8596 7.61596 10.8596ZM12.0528 10.8596C12.6829 10.8596 13.1942 11.37 13.1942 12.0002C13.1942 12.6304 12.6829 13.1408 12.0528 13.1408C11.4227 13.1408 10.9115 12.6304 10.9115 12.0002C10.9115 11.37 11.4227 10.8596 12.0528 10.8596ZM16.4897 10.8596C17.1198 10.8596 17.6311 11.37 17.6311 12.0002C17.6311 12.6304 17.1198 13.1408 16.4897 13.1408C15.8596 13.1408 15.3484 12.6304 15.3484 12.0002C15.3484 11.37 15.8596 10.8596 16.4897 10.8596Z" fill="#BCBEC1" />
                </svg>
            }
        </div>
    );
};


export default MenuChatSvg;