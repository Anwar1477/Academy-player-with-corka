import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import AddVideo from '../componet/AddVideo/AddVideo';
import VideoDetails from '../componet/VideoDetails/VideoDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/addVideo',
        element: <AddVideo />,
      },
      {
        path: '/video/:id',
        element: <VideoDetails />,
      },
    ],
  },
]);

export default router;