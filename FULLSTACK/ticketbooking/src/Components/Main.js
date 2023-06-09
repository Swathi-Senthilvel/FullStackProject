/* eslint-disable no-unused-vars */
// // /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import  './Login1.css';
// import { Card } from "@mui/material";


// export default function Home() {

//   return (
//     <section class="back">
      
//     <nav>
//     </nav><br/>
//         <h2>BOOK MY TICKET</h2>
// <Card className="hii" elevation={10}>
//     <div class="text-box">
//         <br/>
//         <h3>Our IPL ticket booking platform strives to offer a seamless and convenient experience to our users. We are committed to providing a platform that not only allows fans to secure their tickets with ease but also fosters a sense of excitement and anticipation for the thrilling matches ahead. Book your tickets now and be a part of the electrifying IPL experience!</h3>
//                    <Link to='/login' class="hero-btn">ADMIN-Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     </div>
//   </Card>

//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import  './Login1.css';
import { Card ,Typography,Paper} from "@mui/material";


export default function Home1() {

  return (
    <section class="header">
      
    <nav>
    </nav>
<Typography>
 <h1 style={{margin:'10px', fontFamily:'cursive'}}>TICKETIST</h1></Typography>
    <Paper style={{opacity:'0.8',backgroundcolor:'#CDE5F3'}}>
                            <h1 style={{fontFamily:'serif',fontStyle:'revert-layer', marginLeft:'30px'}}>Start Booking!</h1>
                            <div style={{align:'center',display:'inline-block'}}>
        <h1>BOOK MY TICKET</h1>
        <p>Our School will provide its students with an education by nurturing self-discipline, self-confidence and creativity which will encourage in them an enduring love of knowledge and the passion and sense of improvement, as well as responsibility to make a positive difference in the lives of others through their own actions and example.</p>
                   <Link to='/admin' class="hero-btn">ADMIN-Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </Paper>
    </section>
 

  );
}