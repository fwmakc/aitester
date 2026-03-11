import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '',
        component: () => import('pages/app/AppLayout.vue'),
        children: [
          { path: 'models', name: 'modelsPage', component: () => import('pages/app/models/ModelsPage.vue') },
          { path: 'settings', name: 'settingsPage', component: () => import('pages/app/settings/SettingsPage.vue') },
          { path: 'criteria', name: 'criteriaPage', component: () => import('pages/app/criteria/CriteriaPage.vue') },
          { path: 'runs', name: 'runsPage', component: () => import('pages/app/runs/RunsPage.vue') },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error/ErrorLayout.vue'),
    children: [{ path: '', component: () => import('pages/error/ErrorNotFound.vue') }],
  },
];

export default routes;
