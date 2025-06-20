import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Viewstory from './Viewstory.jsx';
import Profile from './Profile.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Story/:story_id/:total',
    element: <Viewstory />,
  },
  {
    path: '/Story',
    element: <div style={{ padding: '20px' }}>Please select a story ID.</div>, // optional fallback
  },
  {
    path: '/Profile',
    element: <Profile />,
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

