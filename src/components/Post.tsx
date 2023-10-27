import {FC} from 'react';
import {Card, Container, Image} from "react-bootstrap";

const Post: FC = () => {
    return (
        <Card className='mb-5' style={{width: '65%'}}>
            <Card.Header className='text-muted'>
                <div
                    className='d-inline-block'
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
                            left: 20
                        }}
                    />
                    <span className='align-middle'>
                        Author Name
                    </span>
                </div>

            </Card.Header>
            <Container
                className='p-4 text-center'
                style={{
                    // width: '95%',
                    maxHeight: '900px',
                    overflowY: 'hidden'
                }}
            >
                <Card.Img
                    // variant={'top'}
                    src="https://www.earthtouchnews.com/media/1951732/bigpicture_black-grouse_2019-05-02.jpg"
                />
            </Container>
            <Card.Body className='p-4 pt-0'>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Post;
