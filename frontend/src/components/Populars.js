import React from 'react';
import bg from "~/images/destination_card_bg.png"
import { Link } from 'gatsby';
const cards = [
    { url: "/", bg: bg, title: "Ходжикент" },
    { url: "/", bg: bg, title: "Хумсан" },
    { url: "/", bg: bg, title: "Хумсан" },
    { url: "/", bg: bg, title: "Хумсан" },
    { url: "/", bg: bg, title: "Хумсан" },
    { url: "/", bg: bg, title: "Хумсан" },
    { url: "/", bg: bg, title: "Хумсан" },
    { url: "/", bg: bg, title: "Хумсан" },
]

const Populars = () => {
    return (
        <div className='populars'>
            <h1>Популярные направления</h1>
            <div className='dachacards'>
                {
                    cards.map((item, key) => {
                        return (
                            <div className='dachacard' key={key}>
                                <img src={item.bg} alt="card bg" />
                                <Link to={item.url}>{item.title}</Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};


export default Populars;