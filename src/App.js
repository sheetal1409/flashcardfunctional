import logo from './logo.svg';
import './App.css';
import React from 'react'
import FlashCard from './FlashCard';
import cardData from './cardData';
import CardDetails from './CardDetails';


function App() {
  const [flashdata, setFlashData] = React.useState(cardData)
  const [engWord, setEngWord] = React.useState('')
  const [spanWord, setSpanWord] = React.useState('')

  function handleEng(e) {
    setEngWord(e.target.value)
  }
  function handleSpan(e) {
    setSpanWord(e.target.value)
  }
  function addnewCard() {
    let flashcards = [...flashdata]
    flashcards.push({
      "id": flashcards.length + 1,
      "eng": engWord,
      "spa": spanWord
    })
    setFlashData(flashcards)
    setEngWord('')
    setSpanWord('')
  }
  function removeCard(e) {
    console.log("I am here")
    console.log(e)

    setFlashData(flashdata)
  }
  return (
    <div className="App">
      <FlashCard flashdata={flashdata} removeCard={(e) => removeCard(e)} />
      <CardDetails handleEng={handleEng} handleSpan={handleSpan} engWord={engWord} spanWord={spanWord} />
      <button className='addCard' onClick={addnewCard}>Add a new Card</button>
    </div>
  );
}

export default App;
