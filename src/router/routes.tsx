import { h } from 'preact';
import Home from '../components/home/Home';

export default {
  notfound: () => <div>NotFound</div>,
  '/': Home,
} as Record<string, () => h.JSX.Element>;
