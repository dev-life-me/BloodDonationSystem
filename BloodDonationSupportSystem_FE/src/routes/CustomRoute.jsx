import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/DefautPage/HomePage/Home.component";
import Contact from "../pages/DefautPage/ContactPage/Contact";
import News from "../pages/DefautPage/DefaultDetails/News";
import NewsDetail from "../pages/DefautPage/DefaultDetails/NewsDetail";
import QuestionAndAnswer from "../pages/DefautPage/Q&APage/Q&APage";
import LoginPage from "../pages/DefautPage/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/DefautPage/ForgotPasswordPage/ForgotPassword";
import RegisterPage from "../pages/DefautPage/RegisterPage/RegisterPage";
import MemberLayout from "../layouts/MemberLayout/MemberLayout";
import AppointmentHistory from "../pages/MemberPage/AppointmentHistoryPage/appointmentHistory";
import BloodDonateHistory from "../pages/MemberPage/BloodDonateHistoryPage/BloodDonateHistory";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import StaffLayout from "../layouts/StaffLayout/StaffLayout";
import Overview from "../pages/StaffPage/Overview";
import BloodStorageTable from "../components/staff/BloodStorageTable";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppointmentDetail from "../pages/MemberPage/AppointmentHistoryPage/appointmentDetail";



const CustomRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />              
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="q-a" element={<QuestionAndAnswer/>} />
                <Route path="login" element={<LoginPage />} />
                <Route path="reset-password" element={<ForgotPasswordPage />} />
                <Route path="signup" element={<RegisterPage />} />
                <Route path="/user" element={<MemberLayout/>}>
                
                    <Route path="donation-histories" element={<BloodDonateHistory/>}/>
                    <Route path="appointment-histories" element={<AppointmentHistory/>}/>
                    <Route path="appointment-histories/:id" element={<AppointmentDetail />} />
                </Route>
            </Route>
           
            <Route path="/staff/*" element={<StaffLayout />}>

                <Route index element={<Overview />} />
                <Route path="overview" element={<Overview />} />
                <Route path="storage" element={<BloodStorageTable />} />
            </Route>

            {/* Admin Route */}
            <Route path="/admin" element={<AdminLayout/>}/>

            {/* Error Route */}
            <Route path="/404" element={<ErrorPage/>}></Route>
            
        </Routes>
    );
};

export default CustomRoute;
