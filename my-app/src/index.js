import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // Routes & Error Handling
// // Note: By convention, routes are named `routes/[slug].jsx`.
// import Error from './error';
import Home from './Home';
// import ExplorePage from './ExplorePage';
// import About from './About';

const router = createBrowserRouter([
  {
    // Render <Root> at [URL].
    path: "/",
    element: <App />,
//     // Render <Error> when errors occur.
//     errorElement: <Error />,
//     // Render these children in the root's outlet when...
    children: [
      {
        // ...the user visits [URL].
        path: "/",
        element: <Home />

      },
//       {
//         // ...the user visits [URL]/teas.
//         path: "About",
//         element: <About />,
//       },
//       {
//         // ...the user visits [URL]/about.
//         path: "Explore",
//         element: <ExplorePage />,
//         loader: async () => fetch("http://localhost:3000/Randoms").then(response => response.json())

//       }
     ]
   }
 ])







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
 <RouterProvider router = {router} />
 </React.StrictMode>
 );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
