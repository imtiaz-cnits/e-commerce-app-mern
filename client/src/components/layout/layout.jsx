import React from 'react';
import AppNavBar from "./appNavBar.jsx";
import Footer from "./footer.jsx";

const Layout = (props) => {
    return (
        <>
            <AppNavBar/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;