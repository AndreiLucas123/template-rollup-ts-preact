import { createContext, h } from 'preact';

export const routerContext = createContext(
  {} as any as {
    Component: () => h.JSX.Element;
    pushRoute(path: string): void;
  }
);
