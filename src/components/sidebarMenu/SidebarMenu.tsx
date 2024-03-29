import {FC} from 'react';
import {Container} from "react-bootstrap";
import {CgProfile} from "react-icons/cg";
import {BsPeopleFill} from "react-icons/bs";
import {FaRegNewspaper} from "react-icons/fa6";
import './sidebarMenu.css'

const SidebarMenu: FC = () => {
    return (
        <Container className='mt-4 p-0 rounded-3 bg-light text-muted'>
            <Container className='text-start p-0'>
                <Container className='sidebar-menu-item my-1 py-1'>
                    <CgProfile className='me-1' />
                    <span>My page</span>
                </Container>
                <Container className='sidebar-menu-item my-1 py-1'>
                    <BsPeopleFill className='me-1' />
                    <span>Friends</span>
                </Container>
                <Container className='sidebar-menu-item my-1 py-1'>
                    <FaRegNewspaper className='me-1' />
                    <span>News</span>
                </Container>
            </Container>
        </Container>

    );
};

export default SidebarMenu;
