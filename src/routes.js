// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import SignIn from "./views/Auth/SignIn.js";
import Onboarding from "./views/Owner/Onboarding"

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
} from "components/Icons/Icons";
import BusinessPage from "./views/Auth/BusinessPage";

var dashRoutes = [
  {
    path: "/business",
    name: "BusinessPage",
    icon: <HomeIcon color="inherit" />,
    component: BusinessPage,
    layout: "/auth",
  },
  {
    path: "/sign-in",
    name: "Signin",
    icon: <HomeIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },

  {
    name: "ADMIN PAGES",
    category: "admin",
    state: "pageCollapse",
    views: [
      {
        name: "OWNER",
        category: "OWNER_PAGES_ADMIN",
        views: [
          {
            path: "/dashboard",
            name: "Dashboard",
            icon: <HomeIcon color="inherit" />,
            component: Dashboard,
            layout: "/admin",
          },
          {
            path: "/tables",
            name: "Tables",
            icon: <StatsIcon color="inherit" />,
            component: Tables,
            layout: "/admin",
          },
          {
            path: "/billing",
            name: "Billing",
            icon: <CreditIcon color="inherit" />,
            component: Billing,
            layout: "/admin",
          },
        ]
      },

      {
        name: "USER",
        category: "USER_PAGES_ADMIN",
        views: [
          {
            path: "/dashboard",
            name: "Dashboard",
            icon: <HomeIcon color="inherit" />,
            component: Dashboard,
            layout: "/admin",
          },
          {
            path: "/tables",
            name: "Tables",
            icon: <StatsIcon color="inherit" />,
            component: Tables,
            layout: "/admin",
          },
          {
            path: "/billing",
            name: "Billing",
            icon: <CreditIcon color="inherit" />,
            component: Billing,
            layout: "/admin",
          },
        ]
      }
    ],
  },

  {
    name: "OWNER PAGES",
    category: "owner",
    state: "pageCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <HomeIcon color="inherit" />,
        component: Dashboard,
        layout: "/owner",
      },
      {
        path: "/tables",
        name: "Tables",
        icon: <StatsIcon color="inherit" />,
        component: Tables,
        layout: "/owner",
      },
      {
        path: "/billing",
        name: "Billing",
        icon: <CreditIcon color="inherit" />,
        component: Billing,
        layout: "/owner",
      },
    ],
  },

  {
    name: "ONBOARDING PAGES",
    category: "onboarding",
    state: "pageCollapse",
    views: [
      {
        path: "",
        name: "Onboarding",
        icon: <HomeIcon color="inherit" />,
        component: Onboarding,
        layout: "/onboarding",
      }
    ]
  }

];
export default dashRoutes;
