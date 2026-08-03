import { useEffect, useState } from 'react';
import netlifyIdentity from './auth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  const [user, setUser] = useState(() => netlifyIdentity.currentUser());

  useEffect(() => {
    const handleInit = (user) => {
      setUser(user);
    };

    const handleLogin = (user) => {
      setUser(user);
      netlifyIdentity.close();
    };

    const handleLogout = () => {
      setUser(null);
    };

    netlifyIdentity.on('init', handleInit);
    netlifyIdentity.on('login', handleLogin);
    netlifyIdentity.on('logout', handleLogout);

    return () => {
      netlifyIdentity.off('init', handleInit);
      netlifyIdentity.off('login', handleLogin);
      netlifyIdentity.off('logout', handleLogout);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {user ? <Dashboard user={user} /> : <Login />}
    </ThemeProvider>
  );
}

export default App;
