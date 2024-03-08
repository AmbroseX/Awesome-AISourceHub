"use client"
import React from 'react';
import { CategoryData } from '@/types/ToolData';
import CategoryBlock from '@/components/ContentArea/CategoryBlock';
import Contact from '@/components/Contact';
import { toolsInfo } from '@/data/tools-data';
import { siteConfig } from '@/config/site';

const ContentArea: React.FC<{
    categories: CategoryData[];
    categoryRefs: React.RefObject<{ [key: string]: React.RefObject<HTMLDivElement> }>;
}> = ({ categories, categoryRefs }) => {
    return (
        <>
            <div className="mx-auto w-full bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-10">
                <h2 className='mb-2 text-2xl font-bold text-primary/80 sm:text-3xl text-center'>
                    {siteConfig.h2_p}
                </h2>
                <h3 className="mb-2 text-1xl font-bold text-primary/80 sm:text-2xl text-left px-10 py-5">
                    {siteConfig.h3_p}
                </h3>
                <h3 className='font-bold py-1'>挑选标准</h3>
                <h4 className="mb-2 py-3 text-md text-gray-700 px-5">
                    <ul className="list-disc pl-5">
                        <li>{siteConfig.h4_p1}</li>
                        <li>{siteConfig.h4_p2}</li>
                        <li>{siteConfig.h4_p3}</li>
                    </ul>
                </h4>
                <h3 className='font-bold py-1'>工具库信息</h3>
                <h4 className="mb-2 py-3 text-md text-gray-700 px-5">
                    <ul className="list-disc pl-5">
                        <li>共收集了
                            <span className='font-bold p-1'>{toolsInfo.categoryNumber}</span>个类别，
                            <span className='font-bold p-1'>{toolsInfo.toolsNumber}</span>个信息源</li>
                        <li>最后更新时间：{toolsInfo.lastUpdateTime}</li>
                    </ul>
                </h4>
                <h3 className='font-bold py-1'> 项目开源代码地址 </h3>
                <h4 className="mb-2 py-3 text-md text-gray-700 px-5">
                    <li className='py-1'>
                        <a href={siteConfig.links.github_web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out'
                        >
                            GoOut.tools 网页界面:{siteConfig.links.github_web}
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
                <div id="main" className='mx-auto w-full px-4 md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl'>
                    {categories.map((categoryData) => (
                        // 使用 '!' 断言 categoryRefs.current 非空
                        <div ref={categoryRefs.current![categoryData.category]} key={categoryData.category} className='mb-12'>
                            <CategoryBlock categoryData={categoryData} />
                        </div>
                    ))}
                    <Contact></Contact>
                </div>
            </div>
        </>
    );
};

export default ContentArea;
