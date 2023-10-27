import {FC} from 'react';
import {Container} from "react-bootstrap";
import Post from "./Post.tsx";

const NewsList: FC = () => {
    return (
        <Container className='p-0 d-flex flex-column justify-content-center align-items-center'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </Container>
    );
};

export default NewsList;
