import React from 'react';
import './styles/css/reset.css';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CssBaseline from '@mui/material/CssBaseline';
import ScrollToTop from '@utils/ScrollRestoration/ScrollTop';
import App from './App';
import 'swiper/css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <CssBaseline />
      <ScrollToTop />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
