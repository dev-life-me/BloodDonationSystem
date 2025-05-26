import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/DefautPage/DefaultDetails/Home";
import Contact from "../pages/DefautPage/DefaultDetails/Contact";
import News from "../pages/DefautPage/DefaultDetails/News";
import QuestionAndAns from "../pages/DefautPage/DefaultDetails/QuestionAndAns";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPassword";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import MemberLayout from "../layouts/MemberLayout/Member";

const CustomRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/Q-A" element={<QuestionAndAns />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/reset-password" element={<ForgotPasswordPage/>} />
                <Route path="/signup" element={<RegisterPage/>} />
            </Route>
            <Route path="/user/*" element={<MemberLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="news" element={<News />} />
                <Route path="Q-A" element={<QuestionAndAns />} />
    
            </Route>
        </Routes>
    );
}

export default CustomRoute