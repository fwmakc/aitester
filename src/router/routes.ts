import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/',
        component: () => import('layouts/PageLayout.vue'),
        children: [
          { path: 'models', name: 'modelsPage', component: () => import('pages/models/ModelsPage.vue') },
          { path: 'settings', name: 'settingsPage', component: () => import('pages/settings/SettingsPage.vue') },
          { path: 'criteria', name: 'criteriaPage', component: () => import('pages/criteria/CriteriaPage.vue') },
          { path: 'runs', name: 'runsPage', component: () => import('pages/runs/RunsPage.vue') },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
