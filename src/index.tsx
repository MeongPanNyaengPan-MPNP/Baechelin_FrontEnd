import React from 'react';
import './styles/css/reset.css';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

import 'swiper/css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();
/* axios.create({
  headers: { 'Access-Control-Allow-Origin': 'http://15.164.93.211' },
  baseURL: 'http://15.164.93.211',
  withCredentials: true,
}); */
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
