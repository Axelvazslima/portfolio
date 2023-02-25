import * as React from 'react';
import Image from 'next/legacy/image'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CSSLogo from '../public/CSSLogo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CSSText() {
  const [openCSST, setCSST] = React.useState(false);

  const handlerCSST = () => {
    setCSST(!openCSST);
  };

  return (
    <div>
      <div>
        <Image src={CSSLogo} width={48} height={48} onClick={handlerCSST}/>
      </div>
      <Dialog
        open={openCSST}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerCSST}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='text-xl text-center'>{"CSS"}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <h1 className='text-xl text-center border-b-2 border-cyan-500'>The Design</h1>
          <p>CSS (Cascading Style Sheets) is a stylesheet language that is used to specify the look and formatting of a document written in HTML (HyperText Markup Language). It is used to control the layout and design of web pages and web applications, and can be used to style a wide variety of elements on a webpage, such as headings, paragraphs, lists, and links.</p>
<p>CSS consists of a set of rules that define the styles for different elements on a webpage. These rules are made up of selectors, which specify the elements that the rule applies to, and declarations, which specify the styles that should be applied to those elements.</p>
<p>Overall, CSS is an essential tool for creating and formatting content on the web, and is used by nearly all websites and web applications to control the layout and design of their pages.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerCSST}>Great</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}