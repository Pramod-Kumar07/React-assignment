import Quill from 'quill';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import 'quill/dist/quill.snow.css';
import styles from './TextEditor.module.css'

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                        
  ];
  


export default function TextEditor(){

useEffect(() => {
 new Quill('#container',{theme:'snow',modules: {
    toolbar: toolbarOptions
  }})
}, [])


    return(
<>
<div className={styles.div}></div>
<Box className={styles.TextEditor} id='container'></Box>

</>
    )
}