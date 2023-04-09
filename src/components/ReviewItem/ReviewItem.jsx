import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    const {id,img,price,name,quantity}=product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default ReviewItem;