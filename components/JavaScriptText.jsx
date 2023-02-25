import * as React from 'react';
import Image from 'next/legacy/image'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import JavaScriptLogo from '../public/JavaScriptLogo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JavaScriptText() {
  const [openJST, setJST] = React.useState(false);

  const handlerJST = () => {
    setJST(!openJST);
  };

  return (
    <div>
      <div>
        <Image src={JavaScriptLogo} width={48} height={48} onClick={handlerJST}/>
      </div>
      <Dialog
        open={openJST}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerJST}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='text-xl text-center'>{"JavaScript"}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <h1 className='text-xl text-center border-b-2 border-cyan-500'>The Brain</h1>
          <p>JavaScript is a programming language that is commonly used to build web applications and to create interactive elements on websites. It is a client-side language, which means that it is executed by the web browser, rather than on the server.</p>
<p>JavaScript is an object-oriented language, which means that it is based on the concept of "objects," which are data structures that contain properties (characteristics or attributes) and methods (functions that perform a specific action).</p>
<p>JavaScript is often used in conjunction with HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) to create dynamic and interactive web pages. For example, you can use JavaScript to create drop-down menus, validate form input, or create animations.</p>
<p>JavaScript is also commonly used in combination with libraries and frameworks, such as React, Angular, and Vue, which provide additional features and tools for building web applications.</p>
<p>If you are not a programmer, you may still encounter JavaScript in your daily life when using the internet. For example, you may see JavaScript code when inspecting the source code of a web page, or you may encounter JavaScript-based errors when using certain websites.</p>
<p>Overall, JavaScript is a powerful and widely-used programming language that is an important part of the modern web development ecosystem.</p>
<p>And, this is by far the most popular coding language for websites being used for about <span className='text-red-800'>98% of all the internet</span> in some form.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerJST}>Great</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}