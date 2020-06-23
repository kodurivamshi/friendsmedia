import React,{useState} from 'react';
import {Card,CardHeader,CardBody,Button,Col,Row} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup=()=>{
    const history=useHistory();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const postData=()=>{

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"invalid email",classes:"#c62828 red darken-3"});
            return ;
        }
        
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                    console.log(data.error);
                    M.toast({html:data.error,classes:"#c62828 red darken-3"});
            }
            else{
                console.log(data.message);
                M.toast({html:data.message,classes:"#43a047 green darken-1"});
                history.push('/signin');
            }
        }).catch(err=>console.log(err));
    }
    return (
        <div className="mycard auth-card input-field">
        <Card>
            <CardHeader><h3>Friends Media</h3></CardHeader>
            <CardBody>
                
                    
                    <Row className="form-group">
                    <Col md={10}>
                                <input type="text" required placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}></input> 
                    </Col>
                </Row>
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
                    <Button color="primary" onClick={postData}>Signup</Button>
            </Row>  

            <Link to="/signin">Do u have an account?</Link>
        </Card>
        
</div>
    )
}

export default Signup;