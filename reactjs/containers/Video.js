/**
 * Created by Holbinator on 24/06/2017.
 */
import React from "react"
import YouTube from "react-youtube"

export default class Video extends React.Component {
    render() {
        const opts = {
            height: '315',
            width: '560',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div>
                <YouTube
                    videoId="uC9VtVnuPD0"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}