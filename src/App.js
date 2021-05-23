import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: []
        }
        this.upvotedSort = this.upvotedSort.bind(this);
        this.datedSort = this.datedSort.bind(this);
    }

    componentDidMount() {
        this.setState({ 
            display: this.props.articles.sort((a, b) => b.upvotes - a.upvotes) 
        });
    }


    upvotedSort() {
        this.state.display.sort((a, b) => b.upvotes - a.upvotes);
        this.setState({
            display: this.state.display
        })
    }

    datedSort() {
        this.state.display.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.setState({
            display: this.state.display
        });
    }

    render () {
        return (
            <div className="App">
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                    <button data-testid="most-upvoted-link" className="small" onClick={this.upvotedSort}>Most Upvoted</button>
                    <button data-testid="most-recent-link" className="small" onClick={this.datedSort}>Most Recent</button>
                </div>
                <Articles articles={this.state.display}/>
            </div>
        );
    }
}

export default App;
