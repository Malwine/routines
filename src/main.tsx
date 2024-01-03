import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Motivational from './routes/Motivational.tsx';
import Routines, { loader as routinesLoader } from './routes/Routines.tsx';
import Routine, {loader as routineLoader} from './routes/Routine.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Motivational />,
  },
  {
    path: "/routines",
    element: <Routines />,
    loader: routinesLoader,
    children: [
      {
        path: "routines/:routine",
        element: <Routine />,
        loader: routineLoader
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
