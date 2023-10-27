import {FC} from 'react';
import {Container} from "react-bootstrap";
import CurrentUser from "./CurrentUser.tsx";
import SidebarMessages from "./sidebarMessages/SidebarMessages.tsx";
import SidebarMenu from "./sidebarMenu/SidebarMenu.tsx";

const Sidebar: FC = () => {
    return (
        <Container>
            <CurrentUser />
            <SidebarMessages />
            <SidebarMenu />
        </Container>
    );
};

export default Sidebar;
