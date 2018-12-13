class App extends React.Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <h1>Cezary Tworzewski!</h1>
            </div>
        );
    }

    renderCity() {
        return (
            <div>
                <h2>Polska</h2>
            </div>
        );
    }

    renderAge() {
        return (
            <div>
                <h2>26</h2>
            </div>
        );
    }

    renderJob() {
        return (
            <div>
                <h2>WebDeveloper Programmer</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.renderCity(<App />, document.getElementById('city'));
// ReactDOM.renderAge(<App />, document.getElementById('age'));
// ReactDOM.renderJob(<App />, document.getElementById('job'));