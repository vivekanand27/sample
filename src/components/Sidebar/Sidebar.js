import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar } from 'react-bootstrap';

const Nav = styled.div`
    background: #3f51b5;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center
`;

const NavIcon = styled(Link)`
    margin-left : 2rem;
    font-size:2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #ffff
`

const SidebarNav = styled.nav`
    background: #3f51b5;
    width: 250px;
    height:100vh;
    display:flex;
    justify-content: center;
    position: fixed;
    top:0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    overflow:auto;
`

const SidebarWrap = styled.div`
    width:100%;
`
const Header = styled.div`
    color: #fff;
    width:100%;
    text-shadow: 2px 2px #e63946
`

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>


                <Nav>
                    <div>
                        <NavIcon to='#'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </NavIcon>
                    </div>

                    <div className='pl-4'>
                        <LinkContainer to="/">
                            <Navbar.Brand>
                                <Header>
                                    Stop Payment and Void Station
                                </Header>
                              
                                {/* <img src="/logo.JPG" width="200" alt="Logo" /> */}
                            </Navbar.Brand>
                        </LinkContainer>
                    </div>

                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} onClick={() => setSidebar(false)} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
