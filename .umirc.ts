export default {
    hash: true,
    title: 'za-design',
    publicPath: '/za-design/',
    base: '/za-design/',
    mode: 'site',
    resolve: {
        includes: ['docs'],
    },
    menus: {
        '/guide': [
            {
                title: '介绍',
                children: [
                    'guide/index',
                    'guide/getting-started',
                    'guide/Contributing',
                    'guide/customTheme',
                ],
            },
        ],

        '/components': [
            {
                title: '基础',
                children: ['components/za-button', 'components/za-list'],
            },
            {
                title: '布局',
                children: [],
            },
            {
                title: '导航',
                children: [],
            },
            {
                title: '数据录入',
                children: [],
            },
            {
                title: '数据展示',
                children: [],
            },
            {
                title: '反馈',
                children: [],
            },
        ],
    },
    navs: [
        null,
        { title: 'GitHub', path: 'https://github.com/stbui/za' },
        { title: '更新日志', path: 'https://github.com/stbui/za/releases' },
        { title: '中台框架', path: 'https://github.com/stbui/prophet' },
    ],
    scripts: [
        `if (location.pathname.startsWith('/za-design/~demos/')) {
          document.body.style.background = '#f5f7fa'
        }`,
    ],
};
