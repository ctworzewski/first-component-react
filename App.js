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
}

ReactDOM.render(<App />, document.getElementById('root'));