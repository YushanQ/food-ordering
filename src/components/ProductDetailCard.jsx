import React from 'react'
import { Button } from './elements/Button'

export const ProductDetailCard = ({product, onAddProduct}) => {
    const addProduct = () => {
        onAddProduct(product);
    }
  return (
    <div className='p-4 m-4 rounded-lg bg-slate-50'>
        <div className='flex flex-col items-center jusitify-between'>
            <h2 className='text-3xl'> {product.name}</h2>
            <p className='text-2xl text-gray-500'>
                {product.desciption}
            </p>
            
            <div className='flex items-center justify-between'>
                <div className='text-2xl text-black'>
                    {product.price}
                </div>
            </div>
            
        </div>
        <div className='w-full flex items-center justify-center'>
            <img src={product.imageUrl} alt={product.name} className='w-40 h-40 rounded-xl object-cover'/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Button onClick={addProduct}>+</Button>
        </div>
    </div>
  )
}
