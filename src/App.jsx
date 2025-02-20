import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { StyleSheetManager } from 'styled-components'; //needed for the props in styledComponents to not return errors
import isPropValid from '@emotion/is-prop-valid'; //needed for the props in styledComponents to not return errors
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LandingPage from './pages/LandingPage';
import ExternalPagePlaceHolder from './pages/ExternalPagePlaceHolder';
import Toast from './components/UI/Toast';
import RootLayout from './pages/RootLayout';
import Error from './components/UI/Error';
import Contact from './pages/Contact';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // { path: '', element: <LandingPage /> },
      { index: true, element: <LandingPage /> },
      { path: 'contact', element: <Contact /> },
      // { path: 'contact/:personId', element: <Contact /> }, //this is how you get to indiv pages - on indiv page you need to read personId- see notes in contact
      /* These routes will be handled by Netlify redirects */
    ],
  },
  {
    path: 'standings',
    // element: <Navigate to="/standings-decorde.netlify.app" />,
  },
  // { path: 'ihs', element: <ExternalPagePlaceHolder /> },
]);
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
        <RouterProvider router={router} />
        <Toast />
        {/* <Router> */}
        {/* <Routes>
            <Route />

            <Route
              path="standings"
              element={
                <iframe
                  src="https://standings-decorde.netlify.app"
                  style={}
                />
              }
            />
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
          </Routes> */}

        {/* </Router> */}
      </QueryClientProvider>
    </StyleSheetManager>
  );
}
export default App;
