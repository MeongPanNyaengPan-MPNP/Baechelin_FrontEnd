import React from 'react';
import './styles/css/reset.css';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import 'swiper/css';

const root = ReactDOM.createRoot(document.getElementById('modal_root') as HTMLElement);

root.render(<BrowserRouter />);
