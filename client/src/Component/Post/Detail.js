import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import {PostDiv,Post,BtnDiv,SpinnerDiv} from '../../Style/PostDetailCSS'


function Detail() {

    let params = useParams();
    let navigate = useNavigate();
    const [PostInfo, setPostInfo] = useState({})
    const [Flag, setFlag] = useState(false)

    useEffect(() => {
        let body = {
            postNum : params.postNum
        }
        axios.post("/api/post/detail", body).then((response) => {
            if (response.data.success) {
                setPostInfo(response.data.post)
                setFlag(true)
            }
            
        }).catch((err)=> {
            console.log(err)
        })
      
    }, [])

    useEffect(() => {
      console.log(PostInfo)
    }, [PostInfo])
    
    const DeleteHandler = () => {
        if(window.confirm("정말 삭제할거니?")){
            let body = {
                postNum : params.postNum
            }
            axios.post("/api/post/delete", body).then((response) => {
                if (response.data.success) {
                    alert("게시글이 삭제되었습니다")
                    navigate("/");
                }
                
            }).catch((err)=> {
                alert("게시글 삭제 실패")
            })
        }
    }
    

    return (
        <PostDiv>
            {Flag ? (
                <>
                    <Post> 
                        <h1>{PostInfo.title}</h1>
                        {PostInfo.image ? <img src ={PostInfo.image} alt = "" 
                        style={{width: '100%', height: "auto"}} /> : null }
                        
                        <p>{PostInfo.content}</p>
                    </Post>
                    <BtnDiv>
                        <Link to={`/edit/${PostInfo.postNum}`}><button className='edit'>수정</button></Link>
                        <Link><button className='delete' onClick={() => DeleteHandler()}>삭제</button></Link>                    
                    </BtnDiv> 
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation="border" variant="warning" /> 
                </SpinnerDiv>
                
            )}
        
        </PostDiv>
    )
}

export default Detail