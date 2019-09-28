import React, { Component } from 'react';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './redux/store';
const store = configureStore();

class App extends Component {
    render() {
        return (
            <ReduxProvider store={store}>
                <Header />
                <ImageGrid />
            </ReduxProvider>
        );
    }
}

export default App;
