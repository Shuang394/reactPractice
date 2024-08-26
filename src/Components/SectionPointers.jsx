import "../Styles/SectionPointers.css";
import { useState } from "react";
import {v4 as uuidv4} from "uuid"
import BulletPoint from "./BulletPoints";

export default function SectionPointers({ keyIndex, removeSection }) {

    const [bulletPoints, setBulletPoints] = useState([])

    function newBullet(event){
        event.stopPropagation();
        setBulletPoints([...bulletPoints, {id : uuidv4()}])
    }

    function removeBullet(id){
        setBulletPoints(bulletPoints.filter(bulletPoints => bulletPoints.id !== id))
    }

    return (
        <div className="textContainer">
            <form className = "pointerForm">
                <div className = "pointDiv">
                    <input className="title" placeholder="Title e.g ABC Project"></input>
                    <div className = "dateDiv">
                        <input className = "startDate" placeholder="e.g January 2024"></input>
                        <p className = "dash">-</p>
                        <input className = "endDate" placeholder="e.g September 2024"></input>
                    </div>
                </div>
                <input className="subTitle" placeholder="Subtitle e.g Project Head, Topic Name etc."></input>


                {bulletPoints.map(bullet => (
                    <BulletPoint
                    key={bullet.id}
                    Uuid = {bullet.id}
                    removeFunction={removeBullet}
                    />
                ))}
            </form>
            <button type = "button" className = "addBullet" onClick = {(e) => {
                newBullet(e);
            }
            }>Add bullet</button>
            <button type="button" className = "removeSection" onClick={() => removeSection(keyIndex)}>Remove Section</button>
        </div>
    );
}
