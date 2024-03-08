// components/Sidebar.tsx

import React from 'react';
import Link from 'next/link';
import {CategoryData} from "@/types/ToolData";

type SidebarProps = {
    categories: CategoryData[];
    activeCategory: string;
    onCategoryClick: (category: string) => void;
    isSidebarOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({categories, activeCategory, onCategoryClick, isSidebarOpen}) => {
    return (
        <>
            {isSidebarOpen && <nav className='absolute left-0 after:h-[calc(100vh-65px)] block min-h-screen w-60 flex-row flex-nowrap
            bg-gray-50 font-semibold sm:bg-background sm:px-6 sm:pb-6'>
                <a className='-ml-6 -mr-10 hidden h-16 flex-col items-center justify-center sm:flex' href="/">
                    <h1 className='text-xl font-bold text-purple-500 sm:text-sl'>独立开发者出海去工具大全</h1>
                </a>
                <div className='mx-6 hidden flex-col items-center justify-center sm:flex'></div>
                <div
                    className="flex-start relative z-40 flex h-auto w-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded pt-4 opacity-100"
                    aria-label="Sidebar">
                    <div className='flex list-none flex-col md:min-w-full md:flex-col'>
                        <div className='flex-none overflow-y-auto pb-12'>
                            <div className='space-y-4 pb-4'>
                                <div className='py-2'>
                                    {categories.map((category) => (
                                        <div key={category.category} className='space-y-1'>
                                            <div
                                                className="block cursor-pointer rounded-lg hover:bg-gray-100 hover:text-purple-500 text-primary">
                                                <div className="scale relative mb-2 flex items-center gap-2 rounded-r-lg p-2 transition-colors
                            ease-in-out before:transition-colors hover:no-underline sm:border-l-0 sm:pl-6
                            sm:before:absolute sm:before:left-[-5px] sm:before:top-[2px] sm:before:h-[calc(100%-4px)]
                            sm:before:w-[10px] sm:before:rounded-full sm:before:transition-colors">
                                                    <span className="truncate text-sm"
                                                          onClick={() => onCategoryClick(category.category)}>{category.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* <button onClick={() => onCategoryClick(category.category)}
                            className={`text-left w-full font-semibold p-2 rounded
                            ${activeCategory === category.category ? 'bg-gray-300' : 'bg-gray-100 hover:bg-yellow-200'}
                            `}
                        >{category.category}
                        </button> */}

                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            }

        </>
    );
};

export default Sidebar;



