import React from 'react';
import App from './App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import NavBar from './NavBar';
import NoMatch from '../pages/NoMatch';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Component } from 'react';

function Root () {
    // const routes = [
    //     { path: '/', name: 'Home', Component: App, exact: true },
    //     { path: '/about', name: 'About', Component: About, exact: false },
    //     { path: '/contact', name: 'Contact', Component: Contact, exact: false },
    //     { path: '/blog', name: 'Blog', Component: Blog, exact: true },
    //     { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
    //     { path: '*', name: 'No Match', Component: NoMatch, exact: false },
    //   ];
    
    


    return (
        <Router>
        <div className="container todo-app" >
           <NavBar/>
           <div className="content">
             
            <Routes>
               <Route path="/" element={<App />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/contact" element={<Contact />}/>
               <Route path="/blog" element={<Blog />} exact/>
               <Route path="/blog/:id" element={<BlogPost />}/>
               <Route path="*" element={<NoMatch />}/>
            </Routes>
{/**/} 
           {/* <Routes>
               {routes.map(({ path, Component }) => (
                   <Route key={path} path={path} element={<Component />} />
               ))}
           </Routes> */}

{/* {routes.map(({ path, Component, exact }) => (
<Route key={path} path={path} exact={exact}>
  <Component />
</Route>))} */}






{/*  
<Route exact path="/">
<App />
</Route>
<Route path="/about">
<About />
</Route>
<Route path="/contact">
<Contact />
</Route>
<Route exact path="/blog">
<Blog />
</Route>
<Route path="/blog/:id">
<BlogPost />
</Route>
<Route path="*">
<NoMatch />
</Route>
  */}




           </div>
        </div>
        </Router>
    )
}

export default Root; 