import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import App from './App';

function RouterWrapper() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<GlobalStyle/>
				<App/>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default RouterWrapper;