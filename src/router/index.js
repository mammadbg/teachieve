import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../views/Welcome.vue";
// main
import Main from "../views/Main/Main.vue";
import Home from "../views/Main/Home.vue";
import Profile from "../views/Main/Profile.vue";
import MyProfile from "../views/Main/MyProfile.vue";
import Project from "../views/Main/Project.vue";
import NewProject from "../views/Main/NewProject.vue";
import About from "../views/Main/About.vue";
import Sponsors from "../views/Main/Sponsors.vue";
import Contact from "../views/Main/Contact.vue";
// auth
import Login from "../views/LoginTest.vue";
import Signin from "../views/Auth/Signin.vue";
import Entry from "../views/Auth/SigninOptions.vue";
import Signup from "../views/Auth/Signup.vue";
import Restore from "../views/Auth/RestorePassword.vue";
import EnterEmail from "../views/Auth/EnterEmail.vue";
import EnterOtp from "../views/Auth/EnterOtp.vue";
import SetNewPassword from "../views/Auth/SetNewPassword.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/sign-in-options",
    name: "Entry",
    component: Entry
  },
  {
    path: "/signin",
    name: "SigIn",
    component: Signin
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup
  },
  {
    path: "/restore-password",
    name: "Restore",
    component: Restore,
    children: [
      {
        path: "/restore-password",
        name: "EnterEmail",
        component: EnterEmail
      },
      {
        path: "/enterOtp",
        name: "EnterOtp",
        component: EnterOtp
      },
      {
        path: "/setnewpassword",
        name: "SetNewPassword",
        component: SetNewPassword
      }
    ]
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/profile/1",
        name: "Profile",
        component: Profile
      },
      {
        path: "/myProfile",
        name: "MyProfile",
        component: MyProfile
      },
      {
        path: "/new-project",
        name: "NewProject",
        component: NewProject
      },
      {
        path: "/about",
        name: "About",
        component: About
      },
      {
        path: "/sponsors",
        name: "Sponsors",
        component: Sponsors
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact
      },
      {
        path: "/project/:id",
        name: "Project",
        component: Project
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function() {
  //     return import(/* webpackChunkName: "about" */ "../views/About.vue");
  //   }
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
