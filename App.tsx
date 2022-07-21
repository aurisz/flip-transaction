import * as React from 'react';
import { Provider } from 'jotai';

import AppNavigation from './src/navigation';

function App() {
  return (
    <Provider>
      <AppNavigation />
    </Provider>
  );
}

export default App;
