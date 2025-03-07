import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react';
import {useSelector} from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom'
import styles from "./CoursesBox.module.css"
const CoursesBox = ({data}) => {
    const navigate=useNavigate()
    const {isAuth}=useSelector((state)=>state.Authreducer)
    const handlebuy=()=>{
        if(isAuth){
            navigate("/cart")
        }
        else{
            navigate("/login")
        }
    }
    
    // feedback: fp02_102 - move static text to constant or JSON file
  return (
    <div className={styles.Coursesboxwrap}>
        <div className={styles.Coursesbox_img_disc_wrap}>
        <div className={styles.Course_imgbox_wrap}>
            <div>
                <img src={data.course_img}></img>
            </div>
            <div style={{marginTop:"20px"}}>
                <p>{data.review} reviews</p>
            </div>
        </div>
        <div className={styles.Course_discbox_wrap}>
            <div style={{textAlign:"start"}}>
            <Text fontSize="3xl" fontWeight="bold">{data.course_name}</Text>
            </div>
            <div>
                <p style={{textAlign:"start"}}>Test Prep Training</p>
               <HStack>
                   <Text> Duration:</Text><Text color="#8652ff">{data.course_duration} days</Text> <Text>| Mode  :</Text>
                   <Text color="#8652ff">Online</Text>
                </HStack>
            </div>

        </div>
        </div>
        <div className={styles.Course_bottonbox_wrap}>
           <HStack justifyContent="space-evenly">
           <Box as="button" >
                <Text fontSize="xl" color="#8652ff">Explore</Text>
            </Box>
          <Box as="button" onClick={handlebuy} bgColor="#8652ff" borderRadius='5px' width="100px">
            <Text fontSize="large" color="white">Buy Now</Text>
          </Box>
           </HStack>
        </div>
    </div>
  )
}

export default CoursesBox
