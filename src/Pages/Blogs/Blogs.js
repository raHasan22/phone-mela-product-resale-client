import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className="text-5xl text-center">Blogs</h1>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8 mx-5">
            <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content"> 
                <p><strong>Reacting to input with state</strong> <br /> With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input. This is similar to how designers think about UI. <br /> <strong>Choosing the state structure</strong> <br />
            Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs. The most important principle is that state shouldn’t contain redundant or duplicated information. If there’s some unnecessary state, it’s easy to forget to update it, and introduce bugs! <br /> <strong>Sharing state between components</strong> <br />
            Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code. <br />
            <strong>Preserving and resetting state</strong> <br />
            When you re-render a component, React needs to decide which parts of the tree to keep (and update), and which parts to discard or re-create from scratch. In most cases, React’s automatic behavior works well enough. By default, React preserves the parts of the tree that “match up” with the previously rendered component tree.
            </p>
            </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8 mx-5">
            <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
            </div>
            <div className="collapse-content"> 
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the 'Prototype' of an object, we use Object. getPrototypeOf and Object.
            </p>
            </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8 mx-5">
            <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content"> 
                <p><strong>Unit test</strong> <br />
                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />
                <strong>Usage of Unit test</strong><br />
                Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end. <br />
                Here, are the key reasons to perform unit testing in software engineering: <br />
                1.Unit tests help to fix bugs early in the development cycle and save costs. <br />
                2.It helps the developers to understand the testing code base and enables them to make changes quickly <br />
                3.Good unit tests serve as project documentation <br />
                4.Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
            </p>
            </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8 mx-5">
            <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content"> 
                <p> React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.<br />
            </p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;