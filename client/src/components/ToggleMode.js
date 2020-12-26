import React from 'react';
import './CSS/ToggleMode.css';

class ToggleMode extends React.Component {
    state = { light: true };

    // renderLight = (
    //     <div>
    //         {/* <script> */}
    //             {document.body.classList.toggle("light")}
    //         {/* </script> */}
    //     </div>
    // );

    // renderDark = (
    //     <div>
    //         {/* <script> */}
    //             {document.body.classList.toggle("dark")}
    //         {/* </script> */}
    //     </div>
    // );

    render() {
        return (
            <div>
                {/* <button
                    onClick={() => this.setState({ light: !this.state.light })}
                    className="toggleBackground">
                    {this.state.light ?
                        "Dark Mode" :
                        "Light Mode"
                    }
                </button>
                {this.state.light ?
                    this.renderLight :
                    this.renderDark
                } */}
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox"
                            onClick={() => this.setState({ light: !this.state.light })}
                            className="toggleBackground" />

                        <div className="slider round"></div>

                        <br></br><br></br>
                        <div className="toggleName">
                            {this.state.light ?
                                "Dark Mode" :
                                "Light Mode"
                            }
                        </div>

                    </label>
                </div>
                <script>
                    {document.body.classList.toggle("light")}
                </script>
            </div>
        );
    }
}

export default ToggleMode;