import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log(state);
    return {song: state.selectedSong}
}

const SongDetail = ({song}) => {
    if (song){
        return (
            <div>
                Title: {song.title} <br/>
                Duration: {song.duration}
            </div>
        )
    }
    return (
        <div>Select a song</div>
    )
}

export default connect(mapStateToProps)(SongDetail)
