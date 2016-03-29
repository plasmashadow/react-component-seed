import React  from 'react';
import { render } from 'react-dom';

import '../styles/style.css';

export default class HelloWorld extends React.Component{
   constructor(props){
     super(props);
   }

   render(){
     return (<h1>HelloWorld</h1>);
   }
}
