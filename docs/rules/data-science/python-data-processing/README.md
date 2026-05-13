# Python 数据处理规范

## 文件操作

### 使用`with`语句安全处理文件
```python
# 正确示例
with open('data.csv', 'r', encoding='utf-8') as file:
    data = file.read()

# 错误示例
file = open('data.csv', 'r')
try:
    data = file.read()
finally:
    file.close()
```

### 使用`pathlib`处理路径
```python
from pathlib import Path

data_dir = Path('data/')
csv_file = data_dir / 'dataset.csv'

if csv_file.exists():
    with csv_file.open('r', encoding='utf-8') as f:
        data = f.read()
```
