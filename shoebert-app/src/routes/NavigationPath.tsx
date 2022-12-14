import { DashboardPage, LandingPage, LoginPage, RegisterPage } from "../pages";

type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    name: "Landing",
    path: "/",
    component: LandingPage,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "Register",
    path: "/register",
    component: RegisterPage,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
];

export default NavigationPath;
