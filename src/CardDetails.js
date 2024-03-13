import React from "react"

function CardDetails(props) {
    return (
        <div>
            <label for="eng">English</label>
            <input id="eng" type="text" placeholder="English Word" value={props.engWord} onChange={(e) => props.handleEng(e)}></input>
            <label for="span">Spanish</label>
            <input id="span" type="text" placeholder="Spanish Word" value={props.spanWord} onChange={(e) => props.handleSpan(e)}></input>
        </div>
    )
}

export default CardDetails