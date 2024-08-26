import "../Styles/SectionHeader.css";
import SectionPointers from "./SectionPointers";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

export default function SectionHeader({ Active, Selected, id, removeSection}) {
    const [pointers, setPointers] = useState([]);

    function newPointer() {
        setPointers([...pointers, { id: uuidv4() }]);
    }

    function removePointer(id) {
        setPointers(pointers.filter(pointer => pointer.id !== id));
    }

    return (
        <div
            className={`sectionDiv ${Active ? "activeSection" : ""}`}
            onClick={(e) => { e.stopPropagation(); Selected(); }}
        >
            <div className = "titleDiv">
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input className = "sectionHeader" placeholder="Section Title"></input>
                </form>
                <button className = "removeButton" onClick = {() => removeSection(id)}>Delete</button>
            </div>
            <hr className="headerLine"></hr>
            {pointers.map(pointer => (
                <SectionPointers
                    key={pointer.id}
                    keyIndex={pointer.id}
                    removeSection={removePointer}
                />
            ))}
            <div className = "addNewButton">
                <button className="add" onClick={newPointer}>+</button>
            </div>
            
        </div>
    );
}
