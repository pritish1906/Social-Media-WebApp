import { getDocs, collection } from 'firebase/firestore'
import { db} from '../../src/config/firebase'
import { useEffect, useState } from 'react';
import { Post } from '../components/post';
import './main.css'

export interface PostData {
    id: string;
    title: string;
    username: string;
    discription: string;
    postid: string;
}



export const Main = () => {
    const [postsList, setPostList] = useState<PostData[] | null>(null)
    const postsRef = collection(db, "posts");
    
    const getPosts = async() => {
        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc) => ({...doc.data(), postid: doc.id})) as PostData[]);
    }

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <>
        {/* <div className='appName'>TAP TAP</div> */}
            <div className='posts'>
                <div className='post'>
                {postsList?.map((post) => <Post post ={post}/>)}
                </div>
            </div>
        </>
    )
}