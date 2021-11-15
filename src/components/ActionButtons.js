import React from 'react'

function ActionButtons({ timer, skip }) {
    return (
        <div className="row ">

            <div className="col-10 offset-1 text-center">
                <button className="btn btn-success col-4 m-3" onClick={timer}>START</button>
                <button className="btn btn-warning col-4 m-3" onClick={skip}>SKIP</button>
            </div>
        </div>
    )
}

export default ActionButtons
