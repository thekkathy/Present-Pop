import React from 'react';
import './CSS/ToggleMode.css';

import { connect } from 'react-redux';
import { setMode } from '../actions';

class ToggleMode extends React.Component {
    state = { light: true };

    componentDidUpdate() {
        console.log(`toggle mode ${this.props}`);
    }

    onClick() {
        //this.props.onToggle();
        //this.setState(this.props.mode);
    }

    render() {
        return (
            <div>
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox"
                            onClick={this.onClick}
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
                        document.body.classList.toggle("light", true) :
                        document.body.classList.toggle("light", false)
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