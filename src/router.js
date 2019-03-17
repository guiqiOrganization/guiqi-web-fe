import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 首页配置
    {
      path: "/",
      name: "HomePage",
      alias: "/HomePage",
      component: () => import("@/pages/HomePage"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 情感挽回
    {
      path: "/EmotionalRecovery",
      name: "EmotionalRecovery",
      component: () => import("@/pages/EmotionalRecovery"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 婚姻挽回
    {
      path: "/MarriageSalvage",
      name: "MarriageSalvage",
      component: () => import("@/pages/MarriageSalvage"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 分离第三者
    {
      path: "/AbruptionMistress",
      name: "AbruptionMistress",
      component: () => import("@/pages/AbruptionMistress"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 真爱狙击
    {
      path: "/LoveSnipe",
      name: "LoveSnipe",
      component: () => import("@/pages/LoveSnipe"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 团队介绍
    {
      path: "/AboutTeam",
      name: "AboutTeam",
      component: () => import("@/pages/AboutTeam"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 经典案例
    {
      path: "/ClassicCase",
      name: "ClassicCase",
      component: () => import("@/pages/ClassicCase"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 服务理念
    {
      path: "/ServiceConcept",
      name: "ServiceConcept",
      component: () => import("@/pages/ServiceConcept"),
      meta: {
        requireAuth: false
      },
      children: []
    },
    // 文章
    {
      path: "/Article",
      name: "Article",
      component: () => import("@/pages/Article"),
      meta: {
        requireAuth: false
      },
      children: []
    }
  ]
});
