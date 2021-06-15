import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';

import Image from "~/components/image"
import LeftArrowSvg from '../images/svg/LeftArrowSvg';
import RightArrowSvg from '../images/svg/RightArrowSvg';

const ImageCarousel = ({ images }) => {
    const caruselRef = useRef()
    const [pos, setpos] = useState(0);

    function onChange(a, b, c) {
        setpos(a)
    }

    return (
        <>
            <Carousel ref={caruselRef} afterChange={onChange} dots={false} draggable={true}>
                {images.map((item, key) => {
                    return (
                        <div key={key}>
                            <Image
                                alt="Category Image"
                                image={item}
                            />
                        </div>
                    )
                })}
            </Carousel>
            <span className='count'>{pos+1}/{images.length}</span>
            <span className='left-arrow' onClick={()=>{
                caruselRef.current.prev()
            }}><LeftArrowSvg/></span>
            <span className='right-arrow' onClick={()=>{
                caruselRef.current.next()
            }}><RightArrowSvg/></span>
        </>
    );
};


export default ImageCarousel;