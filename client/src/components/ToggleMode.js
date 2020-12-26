import React from 'react';
import './CSS/ToggleMode.css';

import { connect } from 'react-redux';
import { setMode } from '../actions';

class ToggleMode extends React.Component {

    componentDidUpdate() {
        console.log(`toggle mode ${this.props}`);
    }

    onClick = () => {
        console.log(this.props)
        //this.props.onToggle.setToggle(!this.props.mode);
    }

    onToggle = () => {
        console.log("mode set!")
        this.props.setMode(!this.props.mode.mode);
    }

    light = () =>{
        document.body.classList.toggle("light", true);
        document.body.classList.toggle("dark", false)
    }

    dark = () =>{
        document.body.classList.toggle("light", false);
        document.body.classList.toggle("dark", true)
    }

    render() {
        return (
            <div>
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox"
                            onClick={this.onToggle}
                            className="toggleBackground" />

                        <div className="slider round"></div>

                        <br></br><br></br>
                        <div className="toggleName">
                            {this.props.mode.mode ?
                                "Dark Mode" :
                                "Light Mode"
                            }
                        </div>

                    </label>
                </div>
                <script>
                    {this.props.mode.mode ?
                        this.light() :
                        this.dark()
                    }
                </script>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { mode: state.mode };
}

export default connect(mapStateToProps, { setMode })(ToggleMode);