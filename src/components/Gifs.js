import React from 'react';

const Gifs = ({title, img}) => {

    return (
        <li>
            <div className='gif-img'>
                <img src={img} alt='' />
            </div>
            <span>{title}</span>
        </li>
    )
}

export default Gifs;