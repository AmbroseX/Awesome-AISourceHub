"use client"
import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const Contact: React.FC = () => {
    return (
        <>
        <div className='my-4'>
            <h2 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl py-2">联系我</h2>
            <div className='items-center space-x-4'>
            <p className='text-xl px-2 py-2'>
                欢迎关注康哥的公众号,持续更新AI开发、产品商业化日常~
                <Image
                className='rounded-lg py-2 px-2 '
                src={siteConfig.official_image}
                alt='GoOut.tools 联系我'
                width={400}
                height={300}
                >
                </Image>
            </p>
            </div>
            
        </div>
        </>
    );
};

export default Contact;