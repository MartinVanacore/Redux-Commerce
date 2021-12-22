import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductComponent } from './ProductComponent';
import {setProducts} from '../Redux/Actions/ProductAction';


export const ProductList = () => {
    
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
                                    .catch((err) => {console.log('err',err)});
                        dispatch(setProducts(response.data));
    };
    
    useEffect(() => {
        fetchProduct()
        
    }, [])
    console.log(products);
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}
