import React ,{useState} from 'react';
import {Button} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Createpost=()=>{
    const history=useHistory();
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [image,setImage]=useState("");
    

    const postDetails=()=>{
        const data=new FormData();
        data.append("img",image);
        
       
        fetch('/uploads',{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            console.log(image.name);
        })
        .catch(err=>console.log(err));

        
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                photo:image.name, 
            })
        }).then(res=>res.json())
        .then(data=>{
               // console.log(data);
            if(data.error){
                   // console.log(data.error);
                    M.toast({html:data.error,classes:"#c62828 red darken-3"});
            }
            else{
               // console.log(data.message);
                M.toast({html:"posted successfully",classes:"#43a047 green darken-1"});
                history.push('/home');
            }
        }).catch(err=>console.log(err))
    }
   
    return(
       <div className="card input-filed" style={{margin:"40px auto",maxWidth:"500px",padding:"20px",textAlign:"center"}}>
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}></input>
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken">
                    <span style={{color:"white"}}>Upload Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}></input>
                </div>
                <div className="file-path-wrapper">
                    <input type="text" className="file-path validate"></input>
                </div>
            
            </div>
            <Button color="primary" style={{width:"150px",alignSelf:'center'}} onClick={postDetails}>Submit Post</Button>
       </div>
    );
}

export default Createpost;
