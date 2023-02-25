import React from "react"
import {parse} from "marked"
import DOMPurify from 'dompurify';
import "../styles/MarkDown.css"

export default class MarkDownEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value: e.target.value,
        });
        document.getElementById('preview').innerHTML = DOMPurify.sanitize(parse(e.target.value) )
      
    }
    componentDidMount(){
        this.setState((state, props)=>({
            value: props.defaultValue,
            content: parse(props.defaultValue)
        }));
      
    }
    render(){
        return(
            <textarea onChange={this.handleChange} id="editor" value={this.state.value}>
            </textarea>
        )
    }
}
  