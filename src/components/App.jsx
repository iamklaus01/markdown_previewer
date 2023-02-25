import React, { useEffect } from "react"
import {parse} from "marked"
import DOMPurify from 'dompurify';
import MarkDownEditor from "./MarkdownEditor";

import '../styles/App.css';

const head_element = "# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n ### And here's some other cool stuff:\n"
const link = "There's also [links](https://www.freecodecamp.org) \n"
const bolded_text = "\n **Here is a bolded Text**\n"
const code = "\n Here's some code, `<div></div>`, between 2 backticks.\n"
const code_block =' ```\n function test(i, j) { \n return i+j; \n } \n``` '
;
const blockquote = "> Block Quotes!";
const items = "1. And there are numbered lists too. \n 1. Use just 1s if you want!\n"
const img = "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) <br>"

const defaultValue = head_element + link + bolded_text + blockquote + "\n" + code + items + code_block + '\n' + img;



function App() {

    useEffect(()=>{
        document.getElementById('preview').innerHTML = DOMPurify.sanitize(parse(defaultValue));
    }, [])
    return (
        <div className="wrapper">
            <div id="textarea-container">
                <MarkDownEditor defaultValue={defaultValue}/>
            </div> 
            <div id="preview">
                
            </div>
    </div>
    );
}

export default App;
