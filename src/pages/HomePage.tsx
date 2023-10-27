import {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar.tsx";

const HomePage: FC = () => {
    return (
        <Container>
            <Row>
                <Col className='border border-1 col-3'>
                    <Sidebar />
                </Col>
                <Col className='border border-1'>
                    News
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
