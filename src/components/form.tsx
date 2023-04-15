import {useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAuthState } from 'react-firebase-hooks/auth'
import { yupResolver} from '@hookform/resolvers/yup' 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection } from 'firebase/firestore'
import { auth, db} from '../config/firebase'
import {useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");
interface FormData{
    title: string;
    discription: string;
}



export const PostForm = () => {
    const [user] = useAuthState(auth)
    const [textdec,setTextDec]=useState('');
    const [caption,setCaption]=useState('');
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
    
    const submit=(e:any) =>{
        e.preventDefault()
        const configuration = new Configuration({
            apiKey: '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',
          });
          const openai = new OpenAIApi(configuration);
          
          const response =  openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write blog on ${caption}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }).then((res:any)=>{
            setTextDec(res.data.choices[0].text)
            console.log(res)
          })
        
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
        <Form onSubmit={submit}>
        <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title..." onChange={event=>setCaption(event.target.value)} value={caption}/>
     
            </Form.Group>
            <Button variant="primary" type="submit">
        Get suggestions
    </Button>   
        </Form>
        <Card>
    <Card.Body style={{color: '#333231 !important'}}>{textdec}</Card.Body>
    </Card>
     
        </div>
    )
}