// 这是一份由视觉、交互及前端一起维护的控制组件库全局风格的配置文件
// 使用时请注意：
// 1. 使用中文注释
// 2. 维护清晰的代码结构，以可读性为优先
// 3. 简洁，不要放无意义的变量配置

const prefix = 'za';

// -------- 主色 -----------
// 主要品牌颜色
const blue_6 = '#00bc70';
const primary_color = blue_6;

// -------- 辅助色 -----------
// 除了主色外的场景色，需要在不同的场景中使用（例如警告色表示警告的操作）。
const assistant_danger = '#f24957';
const assistant_success = '#26bd71';
const assistant_warning = '#ffaf0f';
const assistant_info = '#8875ff';

// -------- 中性色 -----------
// 中性色用于文本、背景和边框颜色，用来表现层次结构。
const text_2 = ' #222';
const text_3 = ' #333';
const text_6 = ' #666';
const text_9 = ' #999';
const text_c = ' #ccc';
const text_d = ' #f2f3f5';
const text_e = ' #f7f7fa';

// -------- 背景色 -----------
// 页面
const body_background = '#fff';
// 组件
const component_background = '#fff';
// 标题或选中的项目
const background_color_light = 'text_e';
// 默认的灰色背景
const background_color_base = 'text-d';

// -------- 情境背景色 -----------
// 消息
const info_color = blue_6;
// 成功
const success_color = assistant_success;
const processing_color = blue_6;
// 失败
const error_color = assistant_danger;
const highlight_color = assistant_danger;
// 警告
const warning_color = assistant_warning;
const normal_color = '#d9d9d9';

// -------- 表格或列表项目的背景色 -----------
// 激活后
const item_active_bg = '#f7f8fa';
// 鼠标移入
const item_hover_bg = '#f7f8fa';
// 斑马纹颜色
const item_striped_bg = '#fafbfc';

// -------- 字体 -----------
// 字体
const font_family_no_number =
    '"Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
const font_family = `"Monospaced Number", ${font_family_no_number}`;
// 代码字体
const code_family = 'Consolas, Menlo, Courier, monospace';

// -------- 文本颜色 -----------
// 标题颜色，如气泡卡片、表格等

// -------- 字号 -----------

// -------- 行高 -----------

// -------- 圆角 -----------

// -------- 间距 -----------

// -------- 链接 -----------

// -------- 边框 -----------

// -------- 禁用状态 -----------
// -------- 轮廓 -----------

const palette = {
    primary: '#00bc70',
    // primary: '#0070F3',
};

export default {
    colorPrimary100: '#f2f6ff',

    primary: palette.primary,
    default: '#00bc70',
    success: 'rgb(255, 61, 113)',
    info: 'rgb(0, 214, 143)',
    warning: 'rgb(255, 170, 0)',

    'primary-color': palette.primary,
    'link-color': '#1890ff',
    'success-color': '#52c41a',
    'warning-color': '#faad14',
    'error-color': ' #f5222d',

    'text-color': 'rgba(0, 0, 0, 0.65)',
    'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
    'disabled-color': 'rgba(0, 0, 0, 0.25)',
    'border-color-base': '#d9d9d9',

    'font-size-base': '14px',

    fonts: {
        default: '"Comic Sans MS", sans-serif',
        heading: '"Helvetica", sans',
    },
    palette: {
        primary: '#574feb',
        success: '#0a7d33',
        danger: '#da1717',
        warning: '#ed9c22',
    },
    Button: {
        defaultProps: {
            palette: 'primary',
        },
    },
};
