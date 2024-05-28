import React from 'react'
import {Tool} from '@/types/ToolData' // 假设你有这样一个类型定义
import Image from 'next/image'
import {siteConfig} from '@/config/site'
type CardProps = Tool

const Card: React.FC<CardProps> = ({
    title,
    is_free,
    image,
    description,
    href,
}) => {
    return (
        <a
            href={`${href}?ref=${siteConfig.site}`}
            target='_blank'
            rel='noopener noreferrer nofollow'
            title={title + description}
            className='hover:bg-border relative mb-6 flex min-h-[122px] min-w-0 
        cursor-pointer flex-col break-words rounded-lg border border-gray-200 p-4 shadow-md transition-all 
        hover:-translate-y-1 hover:scale-105 hover:shadow-lg  xl:mb-0'>
            <div className='flex items-center'>
                <div className='mr-3 flex size-10 overflow-hidden rounded-full'>
                    <Image
                        src={image}
                        alt={title}
                        loading='lazy'
                        width={40}
                        height={40}
                        decoding='async'
                        data-nimg='1'
                        className='object-fill'
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>

                <h3 className='text-primary text-xl font-bold'>{title}</h3>
            </div>
            <div className='mt-1 flex justify-center space-x-4'>
                {typeof is_free === 'boolean' && (
                    <span
                        className={`mt-1 rounded px-1 py-1 text-xs font-bold ${is_free ? 'bg-green-200' : 'bg-red-200'}`}>
                        {is_free ? '免费' : '付费'}
                    </span>
                )}

                <h4 className='text-primary mt-2 line-clamp-3 text-sm'>
                    {description}
                </h4>
            </div>
        </a>
    )
}

export default Card
