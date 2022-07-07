import React from "react";

class Counter extends React.Component {
    constructor() {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ counter: this.state.count + 1 });
    }
    decrement() {
        this.setState({ counter: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button
                    onClick={() => {
                        this.increment();
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        this.decrement();
                    }}
                >
                    -
                </button>
            </div>
        );
    }
}

export default Counter;
