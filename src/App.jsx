import { useEffect, useState } from 'react';
import netlifyIdentity from './auth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.on('login', (user) => setUser(user));
    netlifyIdentity.on('logout', () => setUser(null));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {user ? <Dashboard user={user} /> : <Login />}
    </ThemeProvider>
  );
}

export default App;
