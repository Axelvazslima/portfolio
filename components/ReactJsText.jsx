import * as React from 'react';
import Image from 'next/legacy/image'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ReactJsLogo from '../public/ReactJsLogo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReactJsText() {
  const [openRJT, setRJT] = React.useState(false);

  const handlerRJT = () => {
    setRJT(!openRJT);
  };

  return (
    <div>
      <div>
        <Image src={ReactJsLogo} width={48} height={48} onClick={handlerRJT}/>
      </div>
      <Dialog
        open={openRJT}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerRJT}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='text-xl text-center border-b-2 border-cyan-500'>{"React Js"}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <p>ReactJS is a JavaScript library for building user interfaces. It is primarily used for building web applications, but it can also be used for building mobile applications and desktop applications.</p>
<p>React allows developers to create reusable components that can be combined to build complex user interfaces. These components can be thought of as small, self-contained pieces of code that represent a part of the user interface, such as a button or a form. By breaking down a user interface into smaller components, developers can more easily build and maintain large, complex applications.</p>
<p>React also has a number of other features that make it popular among developers, including a virtual DOM (Document Object Model) which helps improve the performance of applications by reducing the amount of time spent rendering the user interface.</p>
<p>Overall, React is a powerful and widely-used tool for building user interfaces, and it is an important tool for any developer working in web or mobile development.</p>
<p>Examples: <a href='https://www.airbnb.com'><span className=' text-cyan-600'>AirBnb</span></a>, <a href='https://www.facebook.com'><span className='text-blue-600'>Facebook</span></a>, <a href='https://www.netflix.com'><span className='text-red-800'>Netflix</span></a> and a lot more!</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerRJT}>Great</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}