import glob
import os


def check_translation_consistency():
    """检查 rules/ 目录下所有 .cursorrules 文件的基本完整性。"""
    errors = 0
    files_checked = 0
    for file in glob.glob("rules/**/.cursorrules", recursive=True):
        files_checked += 1
        file_size = os.path.getsize(file)
        if file_size == 0:
            print(f"❌ {file} 文件为空")
            errors += 1
            continue
        with open(file, encoding='utf-8') as f:
            content = f.read()
            # 检查是否包含中文内容（表明已翻译）
            has_chinese = any('\u4e00' <= ch <= '\u9fff' for ch in content)
            if not has_chinese:
                print(f"⚠️ {file} 可能未翻译（未检测到中文内容）")
    return errors, files_checked


if __name__ == "__main__":
    print("开始翻译校验...")
    error_count, total = check_translation_consistency()
    print(f"校验完成：共检查 {total} 个文件，发现 {error_count} 处问题")
