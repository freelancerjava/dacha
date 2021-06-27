import React from 'react';
import Image from "~/components/image"
import Card from "~/components/styled/card"
import { Link } from 'gatsby';

const CategoryList = ({ categories }) => {
    return (
        <div className='category-list'>
            <div className='title'>
                <h1>Категории</h1>
                <Link to="/categories">Все категории</Link>
            </div>
            <div className='catcards'>
                {categories.map(({ node }, key) => {
                    return (
                        <div className='catcard' key={node.id}>
                            {console.log(node)}
                            <Image
                                alt="Category Image"
                                className="rounded-t-md border-gray-200	 border-b"
                                image={node.image.localFile}
                            />
                            <span className="count">{node.products.length} объялений</span>
                            <Link to={`/categories/${node.slug}`}>{node.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default CategoryList;