import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components'; //needed for the props in styledComponents to not return errors
import isPropValid from '@emotion/is-prop-valid'; //needed for the props in styledComponents to not return errors
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import LandingPage from '../pages/LandingPage';
import Standings from '../pages/Standings';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  // This implements the default behavior from styled-components v5
  function shouldForwardProp(propName, target) {
    //needed for the props in styledComponents to not return errors
    if (typeof target === 'string') {
      // For HTML elements, forward the prop if it is a valid HTML attribute
      return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
  }
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      {/* needed for the props in styledComponents to not return errors  */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="standings" element={<Standings />} />

            <Route
              path="ihs"
              element={
                <iframe
                  src="https://ihsapp.netlify.app"
                  style={{
                    width: '100%',
                    height: '100dvh',
                    border: 'none',
                    margin: '-10px',
                  }}
                />
              }
            />
          </Routes>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0)',
                color: 'var(--color-grey-700',
              },
            }}
          />
        </Router>
      </QueryClientProvider>
    </StyleSheetManager>
  );
}
export default App;
