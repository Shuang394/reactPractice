import '../Styles/ResumeHeaderStyle.css'
import { useState } from 'react';
export default function ResumeHeader({editActive, showButtons}){
    console.log(editActive);
    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        email: "",
        social: "",
        github: ""
    });

    const [oldValue, newValue] = useState(inputValue);

    function cancelButton() {
        setInputValue(oldValue);
        showButtons();
    }

    return (
        <header>
            <form className = "header"
            onSubmit={(e) => {
                e.preventDefault(); 


            }}>
                <input placeholder="Name e.g John Smith" 
                readOnly = {!editActive ? true : false}
                className = {`firstRow ${(inputValue.name.trim() === "") ? '' : 'filled'}`}
                onChange={(e) => {setInputValue({...inputValue, name: e.target.value})}}
                value = {inputValue.name}
                >
                
                </input>

                <hr></hr>

                <input placeholder="Phone Number e.g +12 345 678" 
                readOnly = {!editActive ? true : false}
                className = {`firstRow ${(inputValue.phone.trim() === "") ? '' : 'filled'}`}
                onChange={(e) => {setInputValue({...inputValue, phone: e.target.value})}}
                value = {inputValue.phone}
                >
                </input>

                <hr></hr>

                <input placeholder="Email e.g example@email.com" 
                readOnly = {!editActive ? true : false}
                type = "email"
                className = {`firstRow ${(inputValue.email.trim() === "") ? '' : 'filled'}`}
                onChange={(e) => {setInputValue({...inputValue, email: e.target.value})}}
                value = {inputValue.email}
                >
                </input>
                
    

                    <div className = "bottom">
                        <label htmlFor = "social">Social Media:</label>
                        <input placeholder="Social Media URL"
                        className = {`firstRow ${(inputValue.social.trim() === "") ? '' : 'filled'}`}
                        onChange = {(e) => {setInputValue({...inputValue, social: e.target.value})}}
                        value = {inputValue.social}
                        >

                        </input>

                        <label htmlFor="GitHub">GitHub: </label>
                        <input id = "GitHub" placeholder="GitHub URL"
                        className = {`firstRow ${(inputValue.github.trim() === "") ? '' : 'filled'}`}
                        onChange={(e) => {setInputValue({...inputValue, github: e.target.value})}}
                        value = {inputValue.github}>
                        </input>
                    </div>

                {editActive ? 
                <button className = "cancel"
                onClick = {cancelButton}>Cancel</button> : ""}
                {!editActive ? 
                <button className = "edit" 
                onClick = {() => {
                    newValue(inputValue);
                    showButtons()}}>
                    Edit</button> :
                <button className = "save" 
                onClick = {showButtons}>Save</button>}
            </form>
        </header>
    )
}