import {useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAuthState } from 'react-firebase-hooks/auth'
import { yupResolver} from '@hookform/resolvers/yup' 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection } from 'firebase/firestore'
import { auth, db} from '../../../Social-Media-App/src/config/firebase'
import {useNavigate} from 'react-router-dom'

interface FormData{
    title: string;
    discription: string;
}



export const PostForm = () => {
    const [user] = useAuthState(auth)

    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("* You must add a title!!!"),
        discription: yup.string().required("* You must add a discription !!!")
    })

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts")


    const createPost = async(data: FormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            id: user?.uid
        });

        navigate("/home")
    }

    return (
        <div className='form'>
            <Form onSubmit={handleSubmit(createPost)}>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title..." {...register("title")}/>
                <p className='formErrors'>{errors.title?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Discription</Form.Label>
                <Form.Control as="textarea" placeholder="Discription..." {...register("discription")}/>
                <p className='formErrors'>{errors.discription?.message}</p>
            </Form.Group>
            
            <Button variant="primary" type="submit">
        Submit
    </Button>
        </Form>
        </div>
    )
}