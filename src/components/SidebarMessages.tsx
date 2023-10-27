import {FC} from 'react';
import {Container} from "react-bootstrap";
import SidebarMessage from "./SidebarMessage.tsx";
import {TbMessage2} from "react-icons/tb";
import './sidebarMessages.css'

const SidebarMessages: FC = () => {
    return (
        <Container className='mt-4 rounded-3 bg-light text-muted'>
            <SidebarMessage />
            <SidebarMessage />
            <SidebarMessage />
            <Container className='all-messages my-1 py-1 d-flex align-items-center justify-content-center'>
                <TbMessage2 className='me-1' />
                <span>All messages</span>
            </Container>
        </Container>
    );
};

export default SidebarMessages;
