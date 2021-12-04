import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import pdf from '../files/BTN710_Group7_Deliverable3.pdf';
import video from '../files/BTN710_Group7_Presentation.mp4';
import ReactPlayer from 'react-player';




export default function Home() {
  return (
  <div className='container'>
      <Box marginTop="50 px" fontSize={50} textAlign="center" fontFamily="Inter" m={1}>Welcome to Group 7 BTN710 Website!</Box>
      <Box fontSize={22} textAlign="center" marginLeft="100px" marginRight="100px" fontFamily="Inter">
        BTN710 Group 7 Deliverable Report
        </Box>
      <Box marginTop="50 px" fontSize={50} textAlign="center" fontFamily="Inter" m={1}>
    <iframe src={pdf} align="middle" width="940" height="780"></iframe></Box>
    <Box fontSize={22} textAlign="center" marginLeft="100px" marginRight="100px" fontFamily="Inter">
        BTN710 Group 7 Deliverable Video
        </Box>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>

        <ReactPlayer 
        width='720px'
        height='480px'
        controls
        url={video}/>
    </div>
        
   
</div>

  );

}