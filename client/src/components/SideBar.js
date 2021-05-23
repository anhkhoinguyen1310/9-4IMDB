import React from 'react'

const SideBar = ({moviesDefault, movies, setMovies,gen_ids}) => {

    console.log(gen_ids)

    return (
        <div className="sidebar-content">
            <div className="form-content">
                <div>Most Popular</div>
                <div>New</div>
                <div>Highest Grossing</div>
                <div>Actors</div>
                <div>Genres</div>
            </div>

            <div className="total">
                <button 
                    className="total-btn">
                    Total
                </button>
            </div>

            <div className="category">
                
            </div>
        </div>
    )
}

export {SideBar} 