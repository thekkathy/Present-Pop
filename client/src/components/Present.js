import React from 'react';
import { Link } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import { generateRandomNumber } from '../generateRandom';

import Coal from '../images/coal.png';
import Socks from '../images/regifted_socks.png';
import Rudolph from '../images/rudolph.png';
import Charity from '../images/charity.png';
import Star from '../images/star.png';
import Rocks from '../images/rocks.png';
import SATPrep from '../images/sat.png';
import Ornaments from '../images/ornaments.png';
import MeltedSnowman from '../images/melted_snowman.png';
import Mii from '../images/mii.png';

import RudolphSong from '../rudolph.mp3';

import './CSS/Present.css';

//set up sound and label
//const audio = {sound: RudolphSong, label: "Rudolph"};
//set up howl object
const sound = new Howl({
    src: RudolphSong,
    loop: true
});

class Present extends React.Component {
    state = { id: 'noStar', image: '', title: '', message: '', href: '', play: false };


    componentDidMount = () => {
        //sound.addEventListener('ended', () => this.setState({play: false}));
        sound.on('end', () => {
            this.setState({ play: false });
        });

        //when the page loads, determine which present the user gets
        const id = parseFloat(this.props.match.params.id);
        // top tier
        if (id < 3) {
            this.setState({
                id: "star",
                image: Star,
                title: "The Star",
                message: "Congratulations! There is only a 2% chance of getting this, you will be blessed with much luck and good fortune next year.",
                href: ""
            });
        }
        // good tier
        else if (id >= 3 && id < 10) {
            if (id % 2) {
                this.setState({
                    image: Charity,
                    title: "Charity",
                    message: "You only have an 4% chance of getting this, so why not take this chance to help another soul? To donate, click on the image and it will redirect you to a page of charities.",
                    href: "https://www.gofundme.com/c/holiday?utm_source=google&utm_medium=cpc&utm_campaign=JoG_Search&utm_content=charity%20donation%20websites&utm_term=charity%20donation%20websites_e_c_&gclid=Cj0KCQiAuJb_BRDJARIsAKkycUnNMRpmU5rzPljCd_GpxG2x4zBnRdDM9AwrgHXuXT7_RafkC_ewBmAaAuHHEALw_wcB"
                });
            }
            else {
                this.setState({
                    id: 'mii',
                    image: Mii,
                    title: "A Mystery Item",
                    message: "I wonder what it is. Click the icon to see what you got.",
                });
            }
        }
        // ok tier
        else if (id >= 10 && id < 30) {
            if (id % 2) {
                this.setState({
                    id: "rudolph",
                    image: Rudolph,
                    title: "Rudolph",
                    message: "Rudolph the red nosed reindeer...(psst, click on the image to sing along)",
                });
            }
            else {
                this.setState({
                    id: "ornaments",
                    image: Ornaments,
                    title: "Ornaments",
                    message: "They're actually kind of pretty (PS: turn on dark mode for a better effect)",
                });
            }
        }
        // mid tier
        else if (id >= 30 && id < 55) {
            if (id % 2) {
                this.setState({
                    id: "socks",
                    image: Socks,
                    title: "Regifted Socks",
                    message: "They didn't even try to hide it...",
                    href: ""
                });
            }
            else {
                this.setState({
                    image: SATPrep,
                    title: "Outdated SAT Prep Book",
                    message: "You need this right.....? (If you want, you can click on the icon to buy one from amazon 🙂)",
                    href: "https://www.amazon.com/How-Prepare-SAT-2007-2008-Barrons/dp/0764134493/ref=sr_1_4?dchild=1&keywords=2008+sat+prep+books&qid=1609036095&s=books&sr=1-4"
                });
            }
        }
        // bottom tier
        else if (id >= 55 && id < 100) {
            if (id % 3 === 2) {
                this.setState({
                    image: Coal,
                    title: "Coal",
                    message: "A flammable black rock. Click on the image to educate yourself :)",
                    href: "https://en.wikipedia.org/wiki/Coal"
                });
            }
            else if (id % 3 === 1) {
                this.setState({
                    id: "rocks",
                    image: Rocks,
                    title: "Rocks",
                    message: "Rocks. Just rocks.",
                    href: ""
                });
            }
            else {
                this.setState({
                    id: "snowman",
                    image: MeltedSnowman,
                    title: "Melted Snowman",
                    message: "The sun was just too hot today. On the bright side, click on the image for a fun clip.",
                    href: "https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYAuQxZBf55Y%26ab_channel%3DDavidRojas&h=AT3rJdym9PWbsoZC72_3Z9PVrnY9p1oZ4U77UcpsMha0R5fbGLWmCcolaH2xgMnw6Pne3f6ImvnpXB4DK2N_CFpM7FGhgH3rpINk8B88gV_TzPDh656i_5IZfm4zUM8r7Nhf4Q"
                });
            }
        }
    }

    componentWillUnmount() {
        if (this.state.play) {
            sound.pause();
        }
        sound.off('end', () => {
            this.setState({ play: false });
        });
        sound.seek(0);
    }


    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? sound.play() : sound.pause();
        });
    }

    renderImage() {
        if (this.state.title === "Rudolph") {
            return (
                <button id={this.state.id} onClick={this.togglePlay} />
            );
        }
        else if (this.state.id === "mii") {
            const mystId = generateRandomNumber();
            return (
                <Link to={`/mystery/${mystId}`}>
                    <img id={this.state.id} className="presentImage" src={this.state.image} alt="present" />
                </Link>
            );
        }
        else if (this.state.id === "star" || this.state.id === "socks" || this.state.id === "rocks" || this.state.id === "ornaments") {
            return (
                <div id={this.state.id}>
                    <img id={this.state.id} className="presentImage" src={this.state.image} alt="present" />
                    <span id={this.state.id} className="darkModeSuperiority">But you should already be on Dark Mode since Dark Mode is clearly superior</span>
                </div>
            );
        }
        else {
            return (
                <div
                    onClick={() => window.open(this.state.href, "_blank")}
                    id={this.state.id} >
                    <img id={this.state.id} className="presentImage" src={this.state.image} alt="present" />
                </div>
            );
        }
    }

    render() {
        Howler.volume(1.0);
        return (
            <div className="present">
                <div className="subtitle" id="presentSubtitle">
                    You got...
                </div>

                {this.renderImage()}

                <div className="title" id="presentTitle">{this.state.title}</div>

                <div className="content">{this.state.message}</div>

                <Link to="/" id="goBack">
                    <span>
                        🎁 Open another present 🎁
                </span>
                </Link>

            </div>
        );
    }
}

export default Present;