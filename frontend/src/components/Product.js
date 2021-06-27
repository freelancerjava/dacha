import React, { useState } from 'react';
import { Link } from 'gatsby';

import Image from "~/components/image"
import LikeSvg from '../images/svg/LikeSvg';
import PinSvg from '../images/svg/PinSvg';
import { Rate, Space } from 'antd';
import ImageCarousel from './ImageCarousel';

const Product = ({ node }) => {
    let likes = JSON.parse(localStorage.getItem('likes')) || []
    const [liked, setliked] = useState(likes.includes(node.id));

    const setLikeIt = () => {
        likes = JSON.parse(localStorage.getItem('likes')) || []
        if (likes.includes(node.id)) {
            likes = likes.filter(item => item != node.id)
        }else{
            likes = [...likes, node.id]
        }
        localStorage.setItem('likes', JSON.stringify(likes))
        setliked(!liked)
    }
    const pics = node.pics && [node.image.localFile, ...node.pics.map(item => item.localFile)] || [node.image.localFile]

    return (
        <div className='product'>
            <div className="product-image">
                <ImageCarousel images={pics} arrows={true} count={true} />
                {/* <div className="overlay"></div> */}
                <span className='title'>{node.category && node.category.name || ''}</span>
                <span className='price'>от {node.price} сум</span>
                <LikeSvg selected={liked} select={() => {
                    setLikeIt()
                }} />

            </div>
            <Link to={`/products/${node.slug}`} key={node.id}>
                <span className="title">{node.title}</span>
                <span><PinSvg /> Чарвак, Бостоналыкский р-н</span>
                <Space><Rate className='mt--5' allowHalf defaultValue={3} /><span className='ml-2'>3.0</span></Space>
            </Link>
        </div>

    );
};


export default Product;