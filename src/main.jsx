import React from 'react';
import HelloWorld  from './components/hello.jsx';
export default class App extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
       return <HelloWorld />;
    }
}
