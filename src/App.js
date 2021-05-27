import React,{lazy, Suspense} from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Slide } from 'react-toastify'; //other option = Slide, Zoom, Flip, Bounce 

const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const VoidConfirmation = lazy(() => import("./screens/StopPayment/VoidConfirmation"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));

const App = () => {
  return(
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Header /> */}
        <Sidebar />
      <ToastContainer autoClose={5000} limit={10} transition={Slide} />
      <main className="py-2">
          <Container>
            <Route path='/void-confirmation' component={VoidConfirmation} />
            <Route path='/' component={HomeScreen} exact />            
        </Container>
      </main>
      
      </Suspense>
    </Router>);
}

export default App;
