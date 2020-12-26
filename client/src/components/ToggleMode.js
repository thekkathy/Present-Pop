import React from 'react';
import './CSS/ToggleMode.css';

class ToggleMode extends React.Component {
    state = { light: true };

    renderLight = (
        <script>
            {() => {
                document.body.classList.toggle("light");
            }}
        </script>
    );

    renderDark = (
        <script>
            {() => {
                document.body.classList.toggle("dark");
            }}
        </script>
    );

    render() {
        return (
            <div>
                <button
                    onClick={() => this.setState({ light: !this.state.light })}
                    className="toggleBackground">
                    Toggle
                </button>
                {this.state.light ? 
                    <div>light</div> : 
                    <div>dark</div>
                }
            </div>
        );
    }
}

export default ToggleMode;