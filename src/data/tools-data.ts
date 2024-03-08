import { CategoryData, ToolsInfo } from "@/types/ToolData";
import toolsDataJson from "@/data/tools-data.json";

// 使用类型断言确保JSON数据符合CategoryData数组类型
// 调整类型断言来匹配JSON结构
// 函数来确保数据类型的正确性
function transformToolsData(data: any): CategoryData[] {
  // 这里可以添加更多的逻辑来验证和转换数据
  return data.tools as CategoryData[];
}

function transformToolsInfo(data: any): ToolsInfo {
  return {
    categoryNumber: data.category_num,
    toolsNumber: data.tools_num,
    lastUpdateTime: data.update_time
  };
}
export const toolsData: CategoryData[] = transformToolsData(toolsDataJson);

export const toolsInfo: ToolsInfo = transformToolsInfo(toolsDataJson);