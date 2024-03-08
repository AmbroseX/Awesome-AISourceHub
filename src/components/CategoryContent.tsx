import {Tool} from "@/types/ToolData";
import Image from "next/image";

type CategoryContentProps = {
  tools: Tool[];
}

const CategoryContent: React.FC<CategoryContentProps> = ({ tools }) => {
    return (
      <div className="flex-1 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <a key={tool.title} href={tool.href} target="_blank" rel="noreferrer" className="border p-4 rounded hover:shadow-lg">
              <h3 className="font-bold mb-1">{tool.title}</h3>
              <p className="text-gray-600 mb-2">{tool.description}</p>
              <Image src={tool.image} 
              alt={tool.title} 
              className="w-6 h-6" 
              width={30} 
              height={30} 
              />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoryContent;