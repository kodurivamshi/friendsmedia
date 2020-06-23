import React from 'react';

const Profile=()=>{
    return (
        <div style={{maxWidth:"700px",margin:"0px auto"}}>        
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
                <div>
                    <img src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                    style={{width:"160px",height:"160px",borderRadius:"80px"}}/>
                </div>
                <div style={{marginTop:"50px"}}>
                    <h4><b>Koduri Vamshi</b></h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%",maginTop:"15px"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
           <div className="gallery">
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
           </div>
        </div>
    )
}

export default Profile;