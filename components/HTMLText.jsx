import * as React from 'react';
import Image from 'next/legacy/image'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import HTMLLogo from '../public/HTMLLogo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HTMLText() {
  const [openHT, setHT] = React.useState(false);

  const handlerHT = () => {
    setHT(!openHT);
  };

  return (
    <div>
      <div>
        <Image src={HTMLLogo} width={48} height={48} onClick={handlerHT}/>
      </div>
      <Dialog
        open={openHT}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerHT}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='text-2xl text-center'>{"HTML"}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <h1 className='text-xl text-center border-b-2 border-cyan-500'>The Structure</h1>
          <p>HTML (HyperText Markup Language) is a markup language used to structure and format content on the web. It is the standard markup language for creating web pages and web applications, and is used to describe the structure and content of a webpage.</p>
<p>HTML consists of a series of elements, which are represented by tags. These tags are used to define the different parts of a webpage, such as headings, paragraphs, lists, and links.</p>
<p>HTML is used in conjunction with CSS (Cascading Style Sheets) to control the layout and design of a webpage. CSS is a stylesheet language that is used to specify the look and formatting of a document written in HTML.</p>
<p>To create a basic HTML page, you can use a simple text editor to write the HTML code and save it with the .html file extension. When you open the HTML file in a web browser, the browser will interpret the HTML code and display the content of the webpage.</p>
<p>Overall, HTML is an essential tool for creating and formatting content on the web, and is used by nearly all websites and web applications.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerHT}>Great</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}