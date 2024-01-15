import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Motivational from './routes/Motivational.tsx';
import Routines, { loader as routinesLoader } from './routes/Routines.tsx';
import Routine, { loader as routineLoader } from './routes/Routine.tsx';
import Layout from './components/Layout.tsx';
import NewRoutine from './routes/NewRoutine.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Motivational,
      },
      {
        path: "routines",
        children: [
          {
            element: <Routines />,
            loader: routinesLoader,
            index: true,
          },
          {
            path: ":routine",
            element: <Routine />,
            loader: routineLoader,
          },
          {
            path: "new",
            element: <NewRoutine />,
            loader: routineLoader,
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
