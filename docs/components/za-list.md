# List 列表

```tsx
import React from 'react';
import List from '@za-design/list';

export default () => {
    return (
        <>
            <div>基础用法</div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
            </List>
            <div>可点击的功能列表</div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
            </List>
            <div>列表项禁用</div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
            </List>
            <div>复杂布局</div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
            </List>
            <div>用户列表</div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
            </List>
            <div>卡片模式</div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>2</List.Item>
                <List.Item>3</List.Item>
            </List>
        </>
    );
};
```
