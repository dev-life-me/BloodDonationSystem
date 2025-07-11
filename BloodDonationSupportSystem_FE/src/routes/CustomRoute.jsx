import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/DefautPage/HomePage/Home.component";
import Contact from "../pages/DefautPage/ContactPage/Contact";
import News from "../pages/DefautPage/NewsPage/News";
import NewsDetail from "../pages/DefautPage/NewsPage/NewsDetail";
import QuestionAndAnswer from "../pages/DefautPage/Q&APage/Q&APage";
import LoginPage from "../pages/DefautPage/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/DefautPage/ForgotPasswordPage/ForgotPassword";
import RegisterPage from "../pages/DefautPage/RegisterPage/RegisterPage";
import MemberLayout from "../layouts/MemberLayout/MemberLayout";

import OverViewPage from "../pages/AdminPage/OverviewPage/OverViewPage";


import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import StaffLayout from "../layouts/StaffLayout/StaffLayout";
import Overview from "../pages/StaffPage/Overview";

import ErrorPage from "../pages/ErrorPage/ErrorPage";

import BloodDonationScheduleList from "../pages/DefautPage/BloodDonationSchedulePage/BloodDonationScheduleList";
import BloodDonationScheduleComponent from "../pages/StaffPage/BloodDonationSchedulePage/BloodDonationSchedule.Component";



import CreateBloodBagPage from "../pages/StaffPage/CreateBloodBagPage";
import FindDistancePage from "../pages/StaffPage/FindByDistance/FindDistancePage";

import BloodStorageChart from "../pages/StaffPage/BloodStorageChart";
import BloodStorageTable from "../pages/StaffPage/BloodDonationInventory/BloodStorageTable";



import ProfilePage from "../pages/MemberPage/ProfilePage/ProfilePage";
import UserManagement from "../pages/AdminPage/UserManagement/UserManagementPage"
import ArticlePage from "../pages/AdminPage/managementhomepage/AdminPosts";
import DonationRegistration from "../pages/MemberPage/DonationRegistration/DonationRegistration";
import BloodDonationRequestPage from "../pages/StaffPage/BloodDonationRequestPage/BloodDonationRequestPage";

import DonorHealthCheckPage from "../pages/StaffPage/ProcessManagement/DonorHealthCheckPage";
import DonorProcessPage from "../pages/StaffPage/ProcessManagement/DonorProcessPage";
import { Navigation } from "../pages/StaffPage/ProcessManagement/Navigation";
import ProfileSidebar from "../pages/MemberPage/ProfilePage/ProfileSidebar";
import ProfileLayout from "../pages/MemberPage/ProfilePage/ProfileLayout";
import BloodDonateHistory from "../pages/MemberPage/BloodDonateHistoryPage/BloodDonateHistory";
import AppointmentHistory from "../pages/MemberPage/BloodDonateHistoryPage/AppointmentHistory";
import AppointmentDetail from "../pages/MemberPage/BloodDonateHistoryPage/AppointmentDetail";
import BloodDonationReport from "../pages/AdminPage/ReportPage/BloodDonationReport";
import BloodInventoryReport from "../pages/AdminPage/ReportPage/BloodInventoryReport";
import Account from "../pages/AdminPage/Account";



const CustomRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="q-a" element={<QuestionAndAnswer />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reset-password" element={<ForgotPasswordPage />} />
        <Route path="signup" element={<RegisterPage />} />
        <Route path="event" element={<BloodDonationScheduleList />} />

        <Route path="/user" element={<MemberLayout />}>
          <Route path="blood-donation-register" element={<DonationRegistration />} />
          <Route path="profile/*" element={<ProfileLayout />} >
            <Route index element={<ProfilePage />} />
            <Route path="history" element={<BloodDonateHistory />} />
            {/* <Route path="appointment-histories" element={<AppointmentHistory />} /> */}
            <Route path="appointment-histories/:id" element={<AppointmentDetail />} />
          </Route>
        </Route>
      </Route>

      <Route path="/staff/*" element={<StaffLayout />}>
        <Route index element={<BloodDonationRequestPage />} />
   
        <Route path="storage/blood-bag-list" element={<BloodStorageTable />} />

        <Route path="find-by-distance" element={<FindDistancePage />} />
        <Route path="blood-management/*" element={<Navigation />} >
          <Route path="health-check" element={<DonorHealthCheckPage />} />
          <Route path="" element={<DonorHealthCheckPage />} />
          <Route path="process" element={<DonorProcessPage />} />
        </Route>
        <Route path="request" element={<BloodDonationRequestPage />} />
        <Route path="blood-donation-schedule"element={<BloodDonationScheduleComponent />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      {/* Admin Route */}
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="overview" element={<OverViewPage />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="posts" element={<ArticlePage />} />
        <Route path="donation-report" element={<BloodDonationReport />} />
        <Route path="blood-inventory-report" element={<BloodInventoryReport />} />
        <Route path="account" element={<Account />} />
      </Route>


      {/* Error Route */}
      <Route path="/404" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default CustomRoute;
