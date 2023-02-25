import * as React from 'react';
import Image from 'next/legacy/image'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import NextJsLogo from '../public/NextJsLogo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NextJsText() {
  const [openNJT, setNJT] = React.useState(false);

  const handlerNJT = () => {
    setNJT(!openNJT);
  };

  return (
    <div>
      <div>
        <Image src={NextJsLogo} width={48} height={48} onClick={handlerNJT}/>
      </div>
      <Dialog
        open={openNJT}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerNJT}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='text-xl text-center border-b-2 border-cyan-500'>{"NextJs"}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" className='px-2'>
          <p>Next.js is a JavaScript framework for building server-rendered and statically-generated websites and web applications. It is built on top of the popular React library, which is a JavaScript library for building user interfaces.</p>
<p>Next.js is designed to make it easy for developers to build efficient and scalable web applications. It provides a number of features out of the box, including automatic code splitting, optimized performance, and automatic optimization of static assets.</p>
<p>One of the key benefits of using Next.js is that it allows developers to build server-rendered applications, which means that the initial HTML for the application is generated on the server rather than the client. This can help improve the performance and loading times of the application, especially for users on slower internet connections.</p>
<p>Next.js also makes it easy for developers to build statically-generated websites, which are built ahead of time and served as plain HTML files. This can be useful for websites that do not require dynamic content or user interactions, as it allows the website to be served more efficiently.</p>
<p>Overall, Next.js is a powerful and popular tool for building modern web applications, and is particularly well-suited for building server-rendered and statically-generated applications.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerNJT}>Great</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}