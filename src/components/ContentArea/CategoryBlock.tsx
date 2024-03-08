import React from 'react';
import { CategoryData } from '@/types/ToolData';
import Card from './Card';

type CategoryBlockProps = {
    categoryData: CategoryData;
};

const CategoryBlock: React.FC<CategoryBlockProps> = ({ categoryData }) => {
    return (
        <>
            <div className='my-4'>
            <h2 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">{categoryData.category}</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {categoryData.data.map((tool, index) => (
                    <Card key={index} {...tool} />
                ))}
            </div>
        </>
    );
};

export default CategoryBlock;
