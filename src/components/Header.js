// import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import '../styles/header.scss'
// import '../App.css'
// import { BsQuestionCircleFill } from 'react-icons/bs';
// import { MdCall } from 'react-icons/md';

// const Header = () => {
   
//     return (
//         <header>
//             <Navbar  className="primaryBg p-2" expand="lg" collapseOnSelect>
//                 <Container>
//                     <LinkContainer to="/">
//                         <Navbar.Brand>
//                             {/* <img src="/logo.png" width="200" alt="Logo" /> */}
//                             <div className="heading">Stop Payment and Void Station</div>
//                         </Navbar.Brand>
//                     </LinkContainer>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
                        
//                         <Nav className="ml-auto">
//                              <LinkContainer to="/">
//                                 <Nav.Link>
//                                     <BsQuestionCircleFill />
//                                 </Nav.Link>
//                             </LinkContainer>
//                              <LinkContainer to="/">
//                                 <Nav.Link>
//                                     <MdCall />
//                                 </Nav.Link>
//                             </LinkContainer>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
           
//         </header>

//     );

// }

// export default Header


//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/header.scss";


const Header = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "AGER" : "Stop Payment"}</p>
                        </div>
                        <div className="closemenu py-1rem" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                Home
              </MenuItem>
                            <MenuItem icon={<FaList />}>Enquiry</MenuItem>
                            <MenuItem icon={<FaRegHeart />}>Denied Requests</MenuItem>
                            <MenuItem icon={<RiPencilLine />}>Reports</MenuItem>
                            {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;
