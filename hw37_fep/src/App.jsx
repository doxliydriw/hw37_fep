import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import EntryList from './pages/EntryLlst.jsx';
import EntryForm from './pages/EntryForm.jsx';
import Home from './pages/home';
import Root from './components/root';
import EditForm from './pages/EditForm';
import { sortedList } from './store/index';
import { SET_LIST } from './store/slice';

function App() {
  const list = useSelector(state => state.list.value)
  const dispatch = useDispatch();

// Geting data from API
  useEffect(() => {
                    const fetchData = async () => {
                                                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                                                    const data = await response.json();
                                                    // Loading fetched data to state using func loadListToState()
                                                    dispatch(SET_LIST(sortedList(data)))
                                                  };
                    fetchData()
// Trigger rendering when data is "loaded".
                  }, []);
  
// Function to load fetched data to state
  
  const router = createBrowserRouter([
                {
                  path: "/",
                  element: <Root />,
                    errorElement: <ErrorPage />,
                    children: [
                                {
                                  path: "/",
                                  element: <Home/>,
                                },
                                {
                                  path: "/list",
                                  element: <EntryList/>,
                                },
                                {
                                  path: "/form",
                                  element: <EntryForm/>,
                                },
                                {
                                  path: "/edit",
                                  element: <EditForm/>,
                                },
                              ]
                },
]);
   
  return (
          <RouterProvider router={router} />
  )
}

export default App
