'use client'
import React from 'react'
import {CategoryData} from '@/types/ToolData'
import CategoryBlock from '@/components/ContentArea/CategoryBlock'
import Contact from '@/components/Contact'
import {toolsInfo} from '@/data/tools-data'
import {siteConfig} from '@/config/site'

const ContentArea: React.FC<{
    categories: CategoryData[]
    categoryRefs: React.RefObject<{
        [key: string]: React.RefObject<HTMLDivElement>
    }>
}> = ({categories, categoryRefs}) => {
    return (
        <>
            <div className='mx-auto mx-auto mt-10 w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg'>
                <h1 className='text-primary/80 mb-2 text-center text-2xl font-bold sm:text-3xl'>
                    {siteConfig.h1_p}
                </h1>
                <h3 className='text-1xl text-primary/80 mb-2 px-10 py-5 text-left font-bold sm:text-2xl'>
                    {siteConfig.h3_p}
                </h3>
                <h3 className='py-1 font-bold'>挑选标准</h3>
                <h4 className='text-md mb-2 px-5 py-3 text-gray-700'>
                    <ul className='list-disc pl-5'>
                        <li>{siteConfig.h4_p1}</li>
                        <li>{siteConfig.h4_p2}</li>
                        <li>{siteConfig.h4_p3}</li>
                    </ul>
                </h4>
                <h3 className='py-1 font-bold'>工具库信息</h3>
                <h4 className='text-md mb-2 px-5 py-3 text-gray-700'>
                    <ul className='list-disc pl-5'>
                        <li>
                            共收集了
                            <span className='p-1 font-bold'>
                                {toolsInfo.categoryNumber}
                            </span>
                            个类别，
                            <span className='p-1 font-bold'>
                                {toolsInfo.toolsNumber}
                            </span>
                            个信息源
                        </li>
                        <li>最后更新时间：{toolsInfo.lastUpdateTime}</li>
                    </ul>
                </h4>
                <h3 className='py-1 font-bold'> 项目开源代码地址 </h3>
                <h4 className='text-md mb-2 px-5 py-3 text-gray-700'>
                    <li className='py-1'>
                        <a
                            href={siteConfig.links.github_web}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-500 transition duration-300 ease-in-out hover:text-blue-700'>
                            AISourceHub Github仓库:{siteConfig.links.github_web}
                        </a>
                    </li>
                    {/* <li className='py-1'>
                        <a href={siteConfig.links.github_collect}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out'
                        >
                            出海去 仓库收集地址:{siteConfig.links.github_collect}
                        </a>
                    </li> */}
                </h4>
            </div>
            <div className='w-full pb-96 pt-4'>
                <div
                    id='main'
                    className='mx-auto w-full px-4 md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl'>
                    {categories.map((categoryData) => (
                        // 使用 '!' 断言 categoryRefs.current 非空
                        <div
                            ref={categoryRefs.current![categoryData.category]}
                            key={categoryData.category}
                            className='mb-12'>
                            <CategoryBlock categoryData={categoryData} />
                        </div>
                    ))}
                    <Contact></Contact>
                </div>
            </div>
        </>
    )
}

export default ContentArea
