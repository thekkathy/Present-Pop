import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import headMii from '../videos/headMiiClip.mp4';
import textMii from '../videos/textMiiClip.mp4';
import textShadeMii from '../videos/textShadeMiiClip.mp4';
import buttonsMii from '../videos/buttonsMiiClip.mp4';

class Video extends React.Component {
    state = { video: '' };

    componentDidMount() {
        //id as an integer
        const id = parseFloat(this.props.match.params.id);

        switch (id % 4) {
            case 0:
                this.setState({ video: headMii });
                break;
            case 1:
                this.setState({ video: textMii });
                break;
            case 2:
                this.setState({ video: textShadeMii });
                break;
            case 3:
                this.setState({ video: buttonsMii });
                break;
            default:
                this.setState({ video: headMii });
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        ✧ Enjoy this stunning masterpiece ✧
                    </h1>
                    <ReactPlayer
                        url={this.state.video}
                        loop
                        playing
                        controls
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto"
                        }}
                    />
                    <Link to="/" id="goBack">
                        <span>
                            🎁 Go back to main page 🎁
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Video;