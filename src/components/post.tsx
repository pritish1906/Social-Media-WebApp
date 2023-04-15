import { addDoc, deleteDoc, collection, getDocs, query, where, doc } from 'firebase/firestore';
import { PostData } from '../pages/main'
import Card from 'react-bootstrap/Card';
import { db, auth } from '../../src/config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './post.css'


interface Props {
    post: PostData;
}

interface Like {
    userId: string;
}



export const Post = (props: Props) => {
    const [user] = useAuthState(auth)
    const { post } = props
    const [likes, setLikes] = useState<Like[] | null>(null);
    // console.log(post)

    const likesRef = collection(db, "likes")
    const likesDoc = query(likesRef, where("postId", "==", post.postid))


    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId })))

    }


    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.postid
        })
        getLikes();
    }
    const removeLike = async () => {
        const likeToDeleteQuery = query(likesRef, where("postId", "==", post.postid), where("userId", "==", user?.uid))

        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id)
        await deleteDoc(likeToDelete)
        getLikes();
    }




    const hasUserLiked = likes?.find((like) => (
        like.userId === user?.uid
    ))

    useEffect(() => {
        getLikes();
    }, [])

    return (
        <>
                        <div className='tweets'>
                            <Card className='ourCard' >
                                <Card.Header >{post.title}</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>{post.discription}</p><br />
                                        <footer className="blockquote-footer">

                                            @{post.username}
                                            <button className='likeButton'
                                                onClick={!hasUserLiked ? addLike :
                                                    removeLike
                                                }>
                                                {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
                                                {likes && <>{likes?.length}</>}</button>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>

        </>
    )
}