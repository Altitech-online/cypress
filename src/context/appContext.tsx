import { useContext, createContext } from 'react';

export type Context = (value: string) => void;

const defaultContext = {};

export const AppContext = createContext(defaultContext as Context);

export default function useAppContext() {
  return useContext(AppContext);
}
