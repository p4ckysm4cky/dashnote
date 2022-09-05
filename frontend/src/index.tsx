import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
const client = new ApolloClient({
    uri: BACKEND_URI,
    cache: new InMemoryCache(),
});
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
);
