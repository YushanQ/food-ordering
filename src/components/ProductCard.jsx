import React from 'react'
import { AddProduct } from './AddProduct';

export const ProductCard = ({ props, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(props);
    }

    return (
        <div className='w-full p-4 m-2 rounded text-whit bg-gradient-to-b from-slate-600 to-transparent text-center'>
            <img className="" src={props.imageUrl} alt={props.name} />
            <h2 className='pb-2 text-lg'>{props.name}</h2>
            <p className='mb-2 h-20 line-clamp-4'>{props.desciption}</p>
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}
