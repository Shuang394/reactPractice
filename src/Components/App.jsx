import { useState } from 'react'
import SectionHeader from './SectionHeader';

import '../Styles/App.css'
import ResumeHeader from './ResumeHeader'


function App() {

  const [editActive, setEditActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [sections, addSections] = useState([]);
  const [currentIndex, setNewIndex] = useState(0);

  function addNewSection(){
    addSections([...sections, {id: currentIndex}])
    setNewIndex(currentIndex + 1);
  }

  function removeSection(id){
    addSections(sections.filter(sections => sections.id !== id))
  }

  function showButtons(){
    console.log(editActive);
    setEditActive(!editActive)
  }
  
  return (
    <div className = "A4" onClick={() => {setActiveIndex(-1)}}>
      <ResumeHeader editActive={editActive} showButtons={showButtons}></ResumeHeader>
      {sections.map(section => (
        <SectionHeader
          key = {section.id}
          Active = {activeIndex === section.id}
          Selected={() => {setActiveIndex(section.id)}}
          id ={section.id}
          removeSection = {removeSection}
        />
      ))}
      <div className = "addSection"> 
        <button className = "addButton" onClick = {addNewSection}>+</button>
      </div>
      
    </div>


  )
}

export default App
