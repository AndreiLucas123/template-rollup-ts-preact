import { h, render } from 'preact';
import App from './components/App';
import './index.scss';
import RouterProvider from './router/RouterProvider';

render(
  <RouterProvider>
    <App></App>
  </RouterProvider>,
  document.querySelector('#root')!
);
