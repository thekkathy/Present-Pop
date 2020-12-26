import React from 'react';
import './CSS/ToggleMode.css';

class ToggleMode extends React.Component {
    state = { light: false };

    renderLight = (
        <div>
            <script>
                {document.body.classList.toggle("light")}
            </script>
        </div>
    );

    renderDark = (
        <div>
            <script>
                {document.body.classList.toggle("dark")}
            </script>
        </div>
    );

    render() {
        return (
            <div>
                <button
                    onClick={() => this.setState({ light: !this.state.light })}
                    className="toggleBackground">
                    {this.state.light ?
                        "Light Mode" :
                        "Dark Mode"
                    }
                </button>
                {this.state.light ?
                    this.renderLight :
                    this.renderDark
                }
            </div>
        );
    }
}

export default ToggleMode;