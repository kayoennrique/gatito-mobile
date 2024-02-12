import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/Routes';
import PageDefault from './src/components/PageDefault';

export default function App() {
  return <PageDefault>
    <Routes />
  </PageDefault>
}
