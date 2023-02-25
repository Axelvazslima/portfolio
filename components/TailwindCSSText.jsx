import * as React from 'react';
import Image from 'next/legacy/image'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TailwindLogo from '../public/TailwindLogo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TailwindCSSText() {
  const [openTCT, setTCT] = React.useState(false);

  const handlerTCT = () => {
    setTCT(!openTCT);
  };

  return (
    <div>
      <div>
        <Image src={TailwindLogo} width={48} height={48} onClick={handlerTCT}/>
      </div>
      <Dialog
        open={openTCT}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerTCT}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='text-xl text-center border-b-2 border-cyan-500'>{"TailwindCSS"}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <p>Tailwind CSS is a CSS framework that is designed to make it easy for developers to build user interfaces for the web. It provides a set of utility classes that can be used to style elements on a webpage, rather than using traditional CSS rules.</p>
<p>One of the key benefits of using Tailwind CSS is that it allows developers to quickly prototype and build user interfaces without having to write a lot of custom CSS. It also promotes consistency in design and makes it easier to maintain the styles of a website or application over time.</p>
<p>To use Tailwind CSS in a project, you can install it using a package manager like npm or yarn, and then include it in your project's CSS files. You can then use the provided utility classes to style elements on your webpage.</p>
<p>Overall, Tailwind CSS is a popular and useful tool for building user interfaces for the web, and can help make the process of styling a webpage more efficient and maintainable.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerTCT}>Great</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}