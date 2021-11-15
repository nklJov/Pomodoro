import React from 'react'

function Timer({time, timerRef}) {
    return (
        <div className="row ">

            <div className="col-6 offset-3 text-center">
                <h4 className="time" ref={timerRef}> {time} </h4>
            </div>
        </div>
    )
}

export default Timer
