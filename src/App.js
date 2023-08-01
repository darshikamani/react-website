import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));
const Contact = lazy(() => import('./components/contact'));


function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
