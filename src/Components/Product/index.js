import { useSelector } from 'react-redux';
import './_product.scss'

import React from 'react'
import productSlice from '../../Redux/Product';


export const Product = () => {
const productData = useSelector(productSlice.getInitialState);
  return (
    <div className='product-container'>
      {productData.map((product,)=>{
return (<div className='p-3 col-lg-3 col-md-6 product-card'>
        <div className='product-image-container'>
            <img className= 'thumnail' src={require('../../assets/images/shop/'+product.img)}/>
        </div>
        
        <div className='product-info'>
            <h5><a href='#'>{product.pName}</a> </h5>
            <p className='product-price'>{product.price} $</p>
            <div className='product-rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i> 
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i> 
            </div>
        </div>
    </div>)
      })}
    
    </div>
  )
}
