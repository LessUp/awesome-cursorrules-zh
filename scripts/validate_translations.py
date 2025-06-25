import glob
import yaml
from pathlib import Path

def check_translation_consistency():
    errors = 0
    for file in glob.glob("rules/**/*.mdc", recursive=True):
        with open(file, encoding='utf-8') as f:
            content = f.read()
            if "---" not in content:
                print(f"❌ {file} 缺少元数据头部")
                errors += 1
            elif "description:" not in content:
                print(f"⚠️ {file} 缺少description描述")
    return errors

if __name__ == "__main__":
    print("开始翻译校验...")
    error_count = check_translation_consistency()
    print(f"校验完成，发现 {error_count} 处问题")
