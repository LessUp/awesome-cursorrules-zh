import os
import re

# --- 配置 ---
# 脚本会自动计算路径，通常无需修改
ORIGINAL_PROJECT_PATH = os.path.abspath(os.path.join('..', 'awesome-cursorrules'))
TRANSLATED_PROJECT_PATH = os.path.abspath('.')
PLAN_FILE_PATH = os.path.join(TRANSLATED_PROJECT_PATH, 'plan.md')

# --- 翻译模型使用的 Prompt 模板 ---
PROMPT_TEMPLATE = """
# 任务：将以下 Markdown 内容翻译为简体中文

请严格遵守以下规则：
1.  **保留格式**：完整保留所有 Markdown 格式（标题、列表、链接、粗体等）。
2.  **代码不变**：代码块 (```) 和行内代码 (`) `内的所有内容（包括注释）保持原样，绝不翻译。
3.  **术语准确**：使用行业公认的技术术语。
4.  **流畅自然**：译文需通顺易懂。

---
**英文原文:**
```markdown
{file_content}
```
---
**简体中文译文:**
"""

def get_untranslated_files():
    """从 plan.md 读取未翻译的文件列表"""
    untranslated = []
    # 正则表达式，用于匹配未完成的条目，例如：- [ ] `rules/cloud-native/README.md`
    pattern = re.compile(r'-\s*\[\s*\]\s*`([^`]+)`')
    try:
        with open(PLAN_FILE_PATH, 'r', encoding='utf-8') as f:
            for line in f:
                match = pattern.search(line)
                if match:
                    untranslated.append(match.group(1).replace('/', '\\')) # 适配 Windows 路径
    except FileNotFoundError:
        print(f"错误：找不到计划文件 '{PLAN_FILE_PATH}'")
        return None
    return untranslated

def main():
    """主执行函数"""
    print("--- 开始批量翻译任务 ---")
    
    files_to_translate = get_untranslated_files()
    
    if files_to_translate is None:
        return
        
    if not files_to_translate:
        print("太棒了！plan.md 中的所有文件都已标记为完成。")
        return

    print(f"在 plan.md 中找到 {len(files_to_translate)} 个待翻译文件。")
    print("-" * 20)

    for i, relative_path in enumerate(files_to_translate, 1):
        print(f"\n--- 任务 {i}/{len(files_to_translate)} ---")
        print(f"文件: {relative_path}")

        source_path = os.path.join(ORIGINAL_PROJECT_PATH, relative_path)
        dest_path = os.path.join(TRANSLATED_PROJECT_PATH, relative_path)

        # 1. 读取源文件
        try:
            with open(source_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except FileNotFoundError:
            print(f"  [错误] 找不到源文件: {source_path}")
            print("  请按 Enter 键跳过此文件...")
            input()
            continue
        except Exception as e:
            print(f"  [错误] 读取源文件时出错: {e}")
            print("  请按 Enter 键跳过此文件...")
            input()
            continue
            
        # 2. 生成 Prompt
        full_prompt = PROMPT_TEMPLATE.format(file_content=content)

        # 3. 输出操作指令
        print("\n  [操作 1/3] 请复制下面的完整 Prompt，并将其输入到您的翻译模型中：")
        print("-" * 10 + " PROMPT 开始 " + "-" * 10)
        print(full_prompt)
        print("-" * 10 + " PROMPT 结束 " + "-" * 10)
        
        print(f"\n  [操作 2/3] 将翻译模型生成的中文内容保存到以下路径（如果目录不存在，请先创建）：")
        print(f"  目标文件路径: {dest_path}")
        
        print("\n  [操作 3/3] 保存文件后，请按 Enter 键继续处理下一个文件...")
        
        # 等待用户确认
        input()

    print("\n--- 所有任务已处理完毕 ---")
    print("请记得更新 plan.md，将所有完成的任务标记为 [x]。")


if __name__ == "__main__":
    main()
