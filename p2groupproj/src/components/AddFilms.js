import React, {useState} from 'react'
// import WatchList from "./WatchList"
import Search from "./Search"
import NewFilmForm from "./NewFilmForm"


function AddFilms ({addToWatchlist}) {
    return(
        <div>
            {/* <WatchList /> */}
            <Search addToWatchList={addToWatchlist}/>
            <NewFilmForm />

        </div>
    )
}

export default AddFilms