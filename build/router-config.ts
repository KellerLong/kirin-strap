export default [
 {
    path: '/', 'home',
    component: () => import('pages/Main.tsx'),
    models: [import('models/HomeModel.ts')],
  },
 {
    path: '/index.html',
    component: () => import('pages/Main.tsx'),
    models: [import('models/HomeModel.ts')],
  },
 {
    path: '/index',
    component: () => import('pages/Main.tsx'),
    models: [import('models/HomeModel.ts')],
  },
 {
    path: '/account', 'account', 'home',
    component: () => import('pages/account/Main.tsx'),
    models: [],
  }
];
