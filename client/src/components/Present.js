import React from 'react';

import Coal from '../images/coal.png';
import Socks from '../images/regifted_socks.png';
import Rudolph from '../images/rudolph.png';
import Charity from '../images/charity.png';
import Star from '../images/star.png';

import './CSS/Present.css';

class Present extends React.Component {
    state = { id: 'noStar', image: '', title: '', message: '', href: '' };

    //when the page loads, determine which present the user gets
    componentDidMount = () => {
        const id = parseFloat(this.props.match.params.id);
        // top tier
        if(id < 3){
            this.setState({
                id: "star", 
                image: Star, 
                title: "The Star", 
                message: "Congratulations! There is only a 2% chance of getting this, you will be blessed with much luck and good fortune next year.",
                href: "#"
            });
        }
        // good tier
        else if(id >= 3 && id < 10){
            this.setState({
                image: Charity, 
                title: "Charity", 
                message: "You only have an 8% chance of getting this, so why not take this chance to help another soul? To donate, click on the image and it will redirect you to a page of charities.",
                href: "https://www.gofundme.com/c/holiday?utm_source=google&utm_medium=cpc&utm_campaign=JoG_Search&utm_content=charity%20donation%20websites&utm_term=charity%20donation%20websites_e_c_&gclid=Cj0KCQiAuJb_BRDJARIsAKkycUnNMRpmU5rzPljCd_GpxG2x4zBnRdDM9AwrgHXuXT7_RafkC_ewBmAaAuHHEALw_wcB"
            });
        }
        // ok tier
        else if(id >= 10 && id < 30){
            this.setState({
                image: Rudolph, 
                title: "Rudolph", 
                message: "Rudolph the red nosed reindeer...(psst, click on the image to sing along)",
                href: "https://www.youtube.com/watch?v=fJQqOzkcHjg&ab_channel=ChristmasSongsandCarols-LovetoSing"
            });
        }
        // mid tier
        else if(id >= 30 && id < 60){
            this.setState({
                image: Socks, 
                title: "Regifted Socks", 
                message: "They didn't even try to hide it...",
                href: "#"
            });
        }
        // bottom tier
        else if(id >= 60 && id < 100){
            this.setState({
                image: Coal, 
                title: "Coal", 
                message: "A flammable black rock. Click on the image to educate yourself :)",
                href: "https://en.wikipedia.org/wiki/Coal"
            });
        }
    }

    render() {
        return (
            <div>
                <div className="subtitle">
                    You got...
                </div>

                <a id={this.state.id} href={this.state.href}>
                    <img id={this.state.id} className="presentImage" src={this.state.image} alt="present" />
                </a>

                <div className="title">{this.state.title}</div>

                <div className="content">{this.state.message}</div>

            </div>
        );
    }
}

export default Present;