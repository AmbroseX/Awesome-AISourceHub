"use client";
import Image from "next/image";
// pages/index.tsx

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from "@/components/Sidebar/Sidebar";
import { toolsData } from "@/data/tools-data";
import ContentArea from "@/components/ContentArea/ContentArea";
import { Header } from "@/components/Header/Header";
import TopDownButton from "@/components/TopDownButton";


export default function Home() {
  // 设置初始活跃分类，这里我们默认设置为数组的第一个分类的名称
  const [activeCategory, setActiveCategory] = useState(toolsData[0].category);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 默认Sidebar是打开的
  
  useEffect(() => {
    // 监听屏幕宽度变化
    setIsSidebarOpen(window.innerWidth <= 768);
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 以768px为分界点
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    // 初始化时执行一次检查
    handleResize();
    // 监听屏幕宽度变化
    window.addEventListener('resize', handleResize);
    // 组件卸载时移除监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 切换Sidebar的显示状态
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  // 更新活跃分类的方法
  // 使用明确的索引签名初始化 categoryRefs
  const categoryRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    toolsData.reduce((acc, category) => {
      acc[category.category] = React.createRef();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement> }) // 明确指定初始值类型
  );

  const handleCategoryClick = (category: string) => {
    const categoryData = toolsData.find((data) => data.category === category);
    setActiveCategory(category);
    const ref = categoryRefs.current[category];
    if (ref.current){
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
    <main className="min-h-screen bg-background font-sans antialiased">
      <script>

      </script>

        {/* 传递 categories, activeCategory 和 onCategoryClick 给 Sidebar */}
        <div className="container relative ma-auto min-h-screen w-full px-0">
          <div className="flex justify-center">
            {/* 根据isSidebarOpen状态来切换Sidebar的显示 */}
            {/*{isSidebarOpen && (*/}
            {/*  <div className="fixed inset-0 z-30 bg-black bg-opacity-50" onClick={toggleSidebar}></div>*/}
            {/*)}*/}
            {/*<div className={`flex z-40 ${isSidebarOpen ?  'block' : 'hidden'} h-full w-[16rem] transition-all duration-300 ease-in-out sm:block bg-gray-50 shadow-md`}>*/}
              <Sidebar
              categories={toolsData}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
              isSidebarOpen={isSidebarOpen}
              />
            {/*</div>*/}

            {/* <div className="flex z-20 hidden min-h-screen w-{16rem} transition-all duration-300 ease-in-out sm:block">
              <Sidebar
                categories={toolsData}
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
              />
            </div> */}

            <div className={`m-auto transition-margin
              ${isSidebarOpen ? 'ml-[16rem]' : 'ml-0'} 
              transition-all duration-300 ease-in-out`}>
              <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}></Header>
              {/* 传递 categories 和 activeCategory 给 ContentArea */}
              <ContentArea
                categories={toolsData}
                categoryRefs={categoryRefs}
              />
              
            </div>
            
          </div>
      </div>
      {/* 两个 Button 组件 */}
      <TopDownButton /> {/* 在这里使用组件 */}
    </main>

    </>
  );
}
