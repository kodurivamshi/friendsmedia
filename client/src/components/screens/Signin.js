import React ,{useState,useContext} from 'react';
import {Card,CardHeader,CardBody,Button,Col,Row} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
import {userContext} from '../../App';

const Signin=()=>{
    const {state,dispatch}=useContext(userContext);
        const history=useHistory();
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const postData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"invalid email",classes:"#c62828 red darken-3"});
            return ;
        }
        
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
                console.log(data);
            if(data.error){
                   // console.log(data.error);
                    M.toast({html:data.error,classes:"#c62828 red darken-3"});
            }
            else{
               // console.log(data.message);
               localStorage.setItem("jwt",data.token);
               localStorage.setItem("user",JSON.stringify(data.user));
               dispatch({type:"USER",payload:data.user})//when user gets logged in then the state of user get changed by consisting a token..
                M.toast({html:"signedIn successfully",classes:"#43a047 green darken-1"});
                history.push('/home');
            }
        }).catch(err=>console.log(err));
    }
    return (
            <div className="mycard auth-card input-field">
                    <Card>
                        <CardHeader><h3>Friends Media</h3></CardHeader>
                        <CardBody>
                                        <Row className="form-group">
                                
                                        <Col md={10} >
                                                <input type="email" required placeholder="mail ID" value={email} onChange={(e)=>setEmail(e.target.value)}></input> 
                                        </Col>
                                        </Row>
                                
                                        <Row className="form-group">
                                        
                                        <Col md={10}>
                                                        <input type="password" required placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> 
                                        </Col>
                                        </Row>
                                
                
            </CardBody>  
            <Row className="form-group"  style={{alignSelf:'center'}}>
                    <Button color="primary" onClick={postData}>Login</Button>
            </Row>  
  
                               
                                
                        <Link to="/signup">No Account?</Link>
                        
                        </Card>
            </div>
    )
}

export default Signin;