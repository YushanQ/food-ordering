import React from 'react'
import aboutImage from "../assets/images/about-image.png"

export const About = () => {
    return (
        <div className='bg-white'>
            <div className='p-24 grid grid-cols-2'>
                <div className=''>
                    <h2 className='text-2xl font-medium'>About us</h2>
                    <p className='text-lg'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={aboutImage} alt="about" className='w-[400px] h-[400px] object-cover'/>
                </div>
            </div>
        </div>
    )
}
