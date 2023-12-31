import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { cartProducts } from '../stores/cart/cartSlice'
import { ProductSummaryCard } from './ProductSummaryCard'

export const ProductsSummary = () => {
    const cart = useSelector(cartProducts);
    return (
        <div className="flex flex-col">
            { cart && cart.map((product, index) => {
                return (
                    <ProductSummaryCard product={product} key={index} />
                )
            })}
        </div>
    )
}
