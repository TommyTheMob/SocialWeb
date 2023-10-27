import {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar.tsx";
import NewsList from "../components/NewsList.tsx";

const HomePage: FC = () => {
    return (
        <Container>
            <Row>
                <Col className='col-2'>
                    <Sidebar />
                </Col>
                <Col className='p-0'>
                    <NewsList />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
