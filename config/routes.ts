export default [
  { path: '/', name: '主页', icon: 'smile', component: './Index' },
  { path: '/interface_info/:id', name: '查看接口', icon: 'smile', component: './InterfaceInfo', hideInMenu: true},
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  // 左侧菜单栏页面选择为自动渲染，只要此处路由设置后即可自动渲染

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { name: '查询表格', icon: 'table', path: '/admin/interface_info', component: './Admin/interfaceInfo' },
      { name: '接口分析', icon: 'analusis', path: '/admin/interface_analysis', component: './Admin/interfaceAnalysis' },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
