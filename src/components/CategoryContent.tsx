import {Tool} from '@/types/ToolData'
import Image from 'next/image'

type CategoryContentProps = {
    tools: Tool[]
}

const CategoryContent: React.FC<CategoryContentProps> = ({tools}) => {
    return (
        <div className='flex-1 p-5'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {tools.map((tool) => (
                    <a
                        key={tool.title}
                        href={tool.href}
                        target='_blank'
                        rel='noreferrer'
                        className='rounded border p-4 hover:shadow-lg'>
                        <h3 className='mb-1 font-bold'>{tool.title}</h3>
                        <p className='mb-2 text-gray-600'>{tool.description}</p>
                        <Image
                            src={tool.image}
                            alt={tool.title}
                            className='h-6 w-6'
                            width={30}
                            height={30}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CategoryContent
