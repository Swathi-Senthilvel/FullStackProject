/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {Grid,Typography,Paper,Box,Button, Avatar} from '@mui/material';
import {Link} from 'react-router-dom'

export default class Myrofile extends Component {
    h3style={marginLeft:'85px', marginTop:'2px',marginBottom:'20px',padding:'5px',align:'center'}
    h3style1={marginLeft:'125px', marginTop:'2px',marginBottom:'20px',padding:'5px',align:'center'}
    boxstyle={ marginBottom:'5px',marginLeft:'50px',height:'200px',width: '200px',opacity:'1',borderRadius:'5%'}
    boxstyle1={marginBottom:'5px',marginLeft:'80px',marginTop:'5px',height:'200px',width: '200px',borderColor:'black', opacity:'1',borderRadius:'5%'}
    
  render() {
    return (
      <div style={{backgroundImage:'url(../travel1.jpg)',height:'100vh',
      marginTop:'0px',padding:'0px',fontSize:'50px',backgroundSize:'cover',backgroundRepeat:'no-repeat',opacity:'0.95'}}>
        <Grid style ={{padding:'50px'}}>
                <Typography>
                    <h1 style={{margin:'10px', fontFamily:'cursive'}}>WELCOME TO TICKETIST</h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/* <div style={{textAlign:'right'}}>
                        <Button variant='outlined'sx={{color:'#F5F3E1',backgroundColor:'#155AC6',borderColor:'#0480AB '}} startIcon = { < Avatar src = {'../heart.png'} /> } ><Link to="../Likedtrips"><Button variant="contained" size="large" color='info'>
                            LIKED TRIPS</Button>
                        </Link></Button>
                    </div> */}

                    <Paper style={{opacity:'0.8',backgroundcolor:'#CDE5F3'}}>
                            <h1 style={{fontFamily:'serif',fontStyle:'revert-layer', marginLeft:'30px'}}>Start Booking!</h1>
                            <div style={{align:'center',display:'inline-block'}}>
                                <Box 
                                    sx= {{
                                        display: 'flex',
                                        flexDirection:'row',
                                        alignItems: 'center'
                                    }} >
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle}
                                        src="https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
                                        <h3 style={this.h3style}><Link to="../login"><Button variant="contained" size="large" color='secondary'>LOGIN</Button></Link></h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"/>
                                        <h3 style={this.h3style1}><Link to="../register"><Button variant="contained" size="large" color='secondary'>SIGNUP</Button></Link></h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://plus.unsplash.com/premium_photo-1679917489462-460aed6990b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"/>
                                        <h3 style={this.h3style1}><Link to="../home"><Button variant="contained" size="large" color='secondary'>HOME</Button></Link></h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://images.unsplash.com/photo-1554187505-bf7114ee173c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>
                                        <h3 style={this.h3style1}><Link to="../add"><Button variant="contained" size="large" color='secondary'>ADDBOOKING</Button></Link></h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src ='https://images.unsplash.com/photo-1557512367-660ba857c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'/>
                                        <h3 style={this.h3style1}><Link to="../update/:id"><Button variant="contained" size="large" color='secondary'>UPDATE</Button></Link></h3>

                                </div>
                                </Box>
                            </div>
                    </Paper>
                    <h2 style={{color:'#FCFAE9',align:'right'}}><Link to="../login"><Button variant="contained" size="large" color='info'>GET STARTED</Button></Link></h2>
                    <h1 style={{color:'#FCFAE9'}}>Life is short and the world is wide!!</h1>
                </Typography>
            {/* </Paper> */}
        </Grid>
      </div>
    )
}
}