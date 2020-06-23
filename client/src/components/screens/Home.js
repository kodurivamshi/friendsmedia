import React , {useState,useEffect}from  'react';
import {Card,CardHeader,CardText,CardBody,CardTitle,CardImg} from 'reactstrap';

const Home=()=>{
    const [data,setData]=useState([]);
   // const [img,setImage]=useState();
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt"),
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            setData(result.posts);
        });
    },[])
    // const display=(filename)=>{
    //     fetch("/pic/"+filename)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setImage(data);
    //     })
    //     return(
    //         <CardImg src={"http://localhost:3001/"+img}></CardImg>
    //     )
    // }
    return (
        <div className="home">
        {
            data.map(item=>{
                return (
                    <Card className="card home-card">
                <CardHeader><h4>{item.postedBy.name}</h4></CardHeader>
                <CardImg src={"/pic/"+item.photo}></CardImg>
                <CardBody className="card-content">
                <i className="fa fa-heart fa-lg" style={{color:"red"}}></i>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.body}</CardText>
                    <input type="text" placeholder="add a comment"></input>
                </CardBody>
            </Card>
                )
            })
        }
            
          
        </div>
        
    )
}

export default Home;