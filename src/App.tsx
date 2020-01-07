import React from 'react';
import {useTodosQueryQuery} from './api/generated';

type Props = {};

export const App: React.FC<Props> = () => {
  const {data, loading} = useTodosQueryQuery();
  console.log(data);
  return <h1>App component</h1>;
};
