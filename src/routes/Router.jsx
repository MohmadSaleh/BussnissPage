import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutUsPage from "./../pages/AboutUsPage";
import CardsExamplePage from "../sandbox/pages/CardsExamplePage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import FirstComponent from "./../sandbox/components/FirstComponent";
import FatherComponent from "../sandbox/components/fatherchild/FatherComponent";
import SandboxPage from "../sandbox/pages/SandboxPage";
import LifeCycleHooksPage from "../sandbox/pages/LifeCycleHooksPage";
import MemoPage from "../sandbox/pages/MemoPage";
import ContextPage from "../sandbox/pages/ContextPage";
import ProfilePage from "../pages/ProfilePageFile/ProfilePage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import CreatCardPage from "../pages/CreatCardPage/CreatCardPage";
const Router = () => {
  //http://localhost:3000/
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutUsPage />} />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <BizGuard>
            <EditCardPage />
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <BizGuard>
            <CreatCardPage />
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      />
      {/* <Route path="/edit/:id" element={<EditCardPage />} /> */}
      <Route path="/cards-example" element={<CardsExamplePage />} />
      <Route path="/sandbox" element={<SandboxPage />}>
        <Route path="first-component" element={<FirstComponent />} />
        <Route path="fc" element={<FatherComponent />} />
        <Route path="lch" element={<LifeCycleHooksPage />} />
      </Route>
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/context" element={<ContextPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default Router;
/**
 * /sandbox/a1
 * /sandbox/a2
 * /sandbox/a3
 */
