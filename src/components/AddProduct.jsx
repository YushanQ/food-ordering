import React from 'react'

export const AddProduct = ({onAddProduct}) => {
    return (
        <div className='flex justify-end'>
            <button onClick={onAddProduct} className='bg-yellow-400 hover:bg-yellow-500 w-5 h-5 flex items-center justify-center test-lg'>
                <span>+</span>
            </button>
        </div>
    )
}
