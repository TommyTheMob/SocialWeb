import {FC} from 'react';
import {Container} from "react-bootstrap";
import CurrentUser from "./CurrentUser.tsx";
import SidebarMessages from "./SidebarMessages.tsx";
import SidebarMenu from "./SidebarMenu.tsx";

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
