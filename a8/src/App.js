import React, { useRef } from 'react';
import Inst from './components/Inst';
import Navbar from './components/Navbar';

export default function App(props) {
    const userInput = useRef(null);
    const elements = useRef(null);
    const submit = useRef(null);
    
    function nextCharacter(c) {
        return String.fromCharCode(c.charCodeAt(0) +1);
    }


    function part1() {

        var inputNum = userInput.current.value;
        var userElements = elements.current.value;

        if (isNaN(inputNum) || inputNum <= 0) {
            alert('Input Number must be positive integer.');
            return false;
        }
        
        userElements = userElements.replaceAll(' ', '');
        userElements = userElements.split(',');

        elements.current.value = userElements;
        inputNum = parseInt(inputNum)

        if (userElements.length !== inputNum) {
            alert('Please enter in the correct number of elements');
            return false
        }
        for (var i = 0; i < userElements.length; i++) {
                if (isNaN(userElements[i])) {
                alert('Elements should be of interger value!');
                return false;
            }
        }
        var validElements = document.getElementById('validMessage');
        validElements.style.display = 'block';
        
        var submit = document.getElementById('submit2');
        submit.style.display = 'block';
        return true;
    }

    function part2() {       
        var inputNum = userInput.current.value;
        var userElements = elements.current.value;
        const CharArr = [];
        var CharArr2 = [];
        var characterI = 'A';
        var characterIndex = 0; 
        document.write("<h1>Submission Result</h1>");
        document.write("Input Number: " + inputNum +"<br/>");
        document.write("Elements: " + userElements + "<br/>");
        document.write("<br /><hr />");
        document.write("We'll call your blocks 'A', 'B', 'C', 'D', ... <br/>")

        
        for (var i = 0; i < inputNum*2; i+=2) {
            CharArr2 = [];
            for (var j = 1; j <= parseInt(userElements[i]); j++) {
                characterIndex = characterI + j
                CharArr2.push(characterIndex)
            }
            CharArr.push(CharArr2);
            characterI = nextCharacter(characterI);
            characterIndex = 0; 
        }

        characterI = 'A';
        for (i = 0; i < CharArr.length; i++) {
            document.write("<br>Characteristic " + characterI + ": ");
            document.write("[" + CharArr[i] + "]");
            characterI = nextCharacter(characterI);
        }

        document.write("<br />");
        document.write("<h1>Group Summary</h1>");
        document.write("<p>Group members are Manfredis Portilo, SJ Yoon, and Yousef Hameem. All three of the group members worked together on this assignment; everyone sat down together and coded every part equally.</p>");

    }

    return (

        <div>
            <Navbar />
            <Inst />
            <br />
            <form>
                <label 
                className='text-white'>
                    Input Number: 
                </label> 
            
                <input type='text' 
                ref={userInput} 
                placeholder='1' /> 
                
                <label
                className='text-white'>
                    Elements: 
                </label> 
                
                <input type='text' 
                ref={elements}  
                placeholder='1, 2, 3' />      
                <br />
                <br />
                <input 
                onClick={part1}
                className='text-white' 
                type='button' 
                id='submit1' 
                ref={submit}  
                value='Check Elements' />
                <br />
                <p id='validMessage' 
                className='text-white' 
                hidden>
                    Ready to submit!
                </p>
                <br />
                <input 
                onClick={part2} 
                className='text-white' 
                type='button' 
                id='submit2'
                value='Submit' 
                hidden/>
            </form>
            <br />
            <hr />
            <h1 className='text-white'>Group Summary</h1>
            <p className='text-white'>Group members are Manfredis Portilo, SJ Yoon, and Yousef Hameem. All three of the group members worked together on this assignment; everyone sat down together and coded every part equally.</p>
                
            
        </div>
    );
}
