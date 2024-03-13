import React from 'react'

function FlashCard({ flashdata, removeCard }) {
    const [flip, setFlip] = React.useState(false)
    const [currentCard, setCurrentCard] = React.useState(1)
    const itemPerCard = 1
    const startIndex = (currentCard - 1) * itemPerCard
    const endIndex = startIndex + itemPerCard
    let currentFlashCard = flashdata.slice(startIndex, endIndex)
    const [forwardDisable, setForwardDisable] = React.useState(false)
    const [backDisable, setBackDisable] = React.useState(false)
    function handleCard() {
        setFlip(!flip)
    }
    function handleBack() {
        if (flip !== false) {
            setFlip(false)
        }
        if (startIndex >= 1) {
            setCurrentCard(currentCard => currentCard - 1)
            setForwardDisable(false)
        } else {
            setBackDisable(true)
        }

    }

    function handleForward() {
        if (flip !== false) {
            setFlip(false)
        }
        if (currentCard >= flashdata.length) {
            setForwardDisable(true)
            setBackDisable(false)
        }
        if (currentCard < flashdata.length) {
            setCurrentCard(currentCard => currentCard + 1)
        }


    }
    return (
        <div className='flashCard'>
            <section className='card-display'>
                <p>{flashdata.length} Cards to Learn</p>
                <div>  <div onClick={handleCard} style={{ cursor: 'pointer' }}>  {!flip ?
                    <div className='cardDetail'> <h1>In English : <span style={{ color: 'blue' }}>{currentFlashCard[0].eng}</span></h1> </div> : <div> <h1>Spanish we say : <span style={{ color: 'magenta' }}>{currentFlashCard[0].spa}</span></h1></div>}    </div>

                </div>
            </section>
            <section>
                <button onClick={() => handleBack()} disabled={startIndex === 0 ? true : backDisable}>{'<'}</button>
                <button onClick={() => handleForward()} disabled={currentCard === flashdata.length ? true : forwardDisable}> {'>'}</button>
            </section>
        </div >
    )
}

export default FlashCard