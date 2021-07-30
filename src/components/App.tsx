import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { routerContext } from '../providers-context';
import './App.scss';

export default function App() {
  const { Component } = useContext(routerContext);

  return <Component></Component>;
}
