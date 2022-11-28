import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';



const Blog = () => {
    return (
        <div className=' container my-5 py-5 blog-style'>
        <h2>Important Questions</h2>
        <Accordion defaultActiveKey="0" className='w-50 container'>
  <Accordion.Item eventKey="0" >
    <Accordion.Header  ><h5><b className='ms-5'>What are the different ways to manage a state in a React <b className='ms-5'>application?</b></b></h5></Accordion.Header>
    <Accordion.Body>
          <b> Different ways to manage state in React applications:</b>
            <br /><br />
            <p><b>URL: </b>We can use URL to store some data e.g</p>
                <p>1.The id of the current item, being viewed.</p>
                <p>2.Filter parameters.</p>
                <p>3.Pagination offset and limit.</p>
                <p>4.Sorting data.</p>
           <p>Keeping such data in the URL allows users to share deep links with others.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change.React Router is a great tool to handle routes and manage the params.</p> 
           <br />
           <p><b>Web Storage: </b>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</p>  
        
           <p><b>Local State: </b>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.</p>  
        
           <p><b>Lifted State: </b>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.</p>  
        
           <p><b>Derived State: </b>The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.</p>  
        
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header><h5><b className='ms-5'>How does prototypical inheritance work?</b></h5></Accordion.Header>
    <Accordion.Body>
    The ability to access object properties from another object is referred to as prototypical inheritance. To add new properties and methods to an existing object constructor, we use a JavaScript prototype. We can then instruct our JS code to take properties from a prototype. Through the use of a reference pointer function, we can reuse properties or methods from one JavaScript object to another. All JavaScript objects inherit properties and methods from prototypes in the following way:
    <br/><br/>
    The prototype inheritance chain is headed by Object.prototype. Object.prototype is inherited by Date objects, Array objects, and Player objects.
    <br/><br/>
    Date.prototype: Date objects inherit from Date.prototype.
    Array.prototype: Array objects descended from Array.prototype.
    Player.prototype: Player objects descended from Player.prototype.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header> <h5><b className='ms-5'>What is a unit test? Why should we write unit tests?</b></h5></Accordion.Header>
    <Accordion.Body>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.<br/><br/>
    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header> <h5><b className='ms-5'>Write the differences React vs. Angular vs. Vue?</b></h5></Accordion.Header>
    <Accordion.Body><b>Angular vs Vue:</b><br/>
    Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.<br/>
    Angular is Google’s matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.<br/>
    While comparing Vue JS vs Angular, Vue is known for its clean architecture and its elegant designs. On the other hand, Angular is considered for many organizations due to its vast functionality and high performance.<br/>
    <b>React vs Vue:</b><br/>
    Vue is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps.<br/><br/>
    Vue JS is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object. Vue has two-way binding and uses a virtual DOM.<br/><br/>
    <b>React vs Angular:</b><br/>
    React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size.
    </Accordion.Body>
  </Accordion.Item>



         </Accordion>

         

    </div>
        
    );
};


export default Blog;