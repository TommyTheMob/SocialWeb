import {FC} from 'react';
import {Container, Image} from "react-bootstrap";
import './sidebarMessage.css'

const SidebarMessage: FC = () => {

    return (
        <Container className='message-wrapper d-flex align-items-center justify-content-start text-muted my-1 py-1'>
            <div
                style={{
                    position: 'relative'
                }}
            >
                <Image
                    className='me-3'
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    roundedCircle={true}
                    width={30}
                    height={30}
                />
                <div
                    className='rounded-5 bg-success border border-2 border-white'
                    style={{
                        width: 12,
                        height: 12,
                        position: 'absolute',
                        bottom: -2,
                        right: 15
                    }}
                />
            </div>
            <span>
                Message
            </span>
        </Container>
    );
};

export default SidebarMessage;
