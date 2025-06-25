import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Viewstory from './Viewstory.jsx';
import Profile from './Profile.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/Insta-Clone/',
    element: <App />,
  },
  {
    path: '/Insta-Clone/Story/:story_id/:total',
    element: <Viewstory />,
  },
  {
    path: '/Insta-Clone/Story',
    element: <div style={{ padding: '20px' }}>Please select a story ID.</div>, // optional fallback
  },
  {
    path: '/Insta-Clone/Profile',
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
