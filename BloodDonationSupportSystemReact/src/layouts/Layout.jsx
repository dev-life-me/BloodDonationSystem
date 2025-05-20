import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import { useState } from 'react';

export default function Layout() {
    const [openLogin, setIsOpenlogin] = useState(false);
    return (
        <>
            <Header ></Header>
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </>
    );
}