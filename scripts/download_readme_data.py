import requests
from bs4 import BeautifulSoup
import re
import sys
import base64
sys.path.append('./')
from scripts.utils import backup_json, check_folder,decode_and_download_image, decoded_url, extract_domain, get_git_update_time, get_readme,save_json

# 目标网页URL
repo_owner = "AmbroseX"
repo_name = "Awesome-AISourceHub"

save_image_path = './public/images/'
save_json_path = './src/data/tools-data.json'
back_json_path = './src/data/backup'
check_folder(save_image_path)
check_folder(back_json_path)


# 将数据进行备份
backup_json(save_json_path, back_json_path)


last_commit_time = get_git_update_time(repo_owner=repo_owner,repo_name=repo_name,path='README.md')
markdown_content = get_readme(repo_owner=repo_owner,repo_name=repo_name)

# 使用正则表达式分割Markdown内容
sections = re.split(r'\n(## |### )', markdown_content)


def get_block_info(content):
    # title_pattern = r'^(.*?)\n\n\|'
    title_pattern = r'^\s*(.*?)\s*\n\n\|'
    title_match = re.search(title_pattern, content, re.MULTILINE)
    category = title_match.group(1) if title_match else None
    # 正则表达式，用于提取表格行
    # rows_pattern = r'\|\s*\[(.*?)\]\((.*?)\)\s*\|\s*(.*?)\s*\|'
    # 更新表格行匹配正则表达式，更灵活地处理空格和其他可能的格式问题
    rows_pattern = r'\|\s*\[(.*?)\]\((.*?)\)\s*\|\s*(.*?)\s*\|'
    rows_matches = re.findall(rows_pattern, content)

    # 将匹配到的行转换为字典列表
    data = []
    if category:
        for row in rows_matches:
            template_name, href, description = row
            data.append({
                "category": category,
                "href": href,
                "title": template_name,
                "description": description
            })
        return {
            "category": category,
            "data": data
        }

# 初始化结果列表
structured_data = []
category_num = 0
tools_num = 0
# 遍历每个部分，提取数据
for section in sections:
    if section.strip() == "" or section.strip() == "## " or section.strip() == "### ":
        continue
    block_data = get_block_info(section)
    if block_data:
        category = block_data['category']  # 分类名称
        category_data = []
        for line in block_data['data']:  # 跳过表头
            title = line['title']
            description = line['description']
            href = line['href']
            url = extract_domain(decoded_url(href))
            image_src = 'https://icon.horse/icon/' + url
            
            if '免费' in title or '免费' in description:
                is_free = True
            elif "付费" in title or "paid" in title or "付费" in description or "paid" in description:
                is_free = False
            else :
                is_free = None
            category_data.append({
                'category': category,
                "href": line['href'],
                'title': line['title'],
                "is_free": is_free,
                'description': line['description'],
                'image': image_src  # 图片链接需要另外的方式获取
            })
            tools_num+=1
        structured_data.append({
                                "category": category,
                                "data": category_data
                                })
        category_num+=1

save_data = {
    'tools': structured_data,
    'category_num': category_num,
    'tools_num': tools_num,
    'update_time': last_commit_time
}


save_json(save_data, save_json_path)
print(f"一共有{category_num}类别")
print(f"一共有{tools_num}个信息源")