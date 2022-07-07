import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            if (this.state.num !== 0) {
                this.setState({
                    num: this.state.num - 1,
                });
            } else {
                clearInterval(this.intervalID);
            }
        }, 100);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    render() {
        return (
            <div>
                <p>{this.state.num}</p>
            </div>
        );
    }
}
