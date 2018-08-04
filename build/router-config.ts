export default [
 {
    path: '/',
    component: () => import('pages/Main.tsx'),
    models: [import('models/HomeModel.ts')],
  }
];
