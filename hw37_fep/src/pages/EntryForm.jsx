import { useFormik } from 'formik';
import { React } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddEntryToList } from '../store';
import { ADD_ENTRY } from '../store/slice';
 
function EntryForm() {
  const navigate = useNavigate();
  const list = useSelector(state => state.list.value)
  const dispatch = useDispatch();
  
  const formik = useFormik({
                            initialValues: {
                                              firstName: '',
                                              lastName: '',
                                              phone: '',
                                            },
 onSubmit: (values) => {
       if (values.firstName && values.lastName && values.phone) {
         values.name = values.firstName + " " + values.lastName;
         dispatch(ADD_ENTRY(AddEntryToList(list, values)))
         navigate('/list');
       } else {
         alert('Please enter all mandatory data');
       }
     },
   });
    return (
      <>
        <h1>Add new entry</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className='card_cntr'>
              <ul className="card">
                  <li>
                          <label htmlFor="firstName">First Name</label>
                          <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.firstName}
                          />
                  </li>
                  <li>
                          <label htmlFor="lastName">Last Name</label>
                          <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.lastName}
                          />
                  </li>
                  <li>
                          <label htmlFor="email">Phone number</label>
                          <input
                              id="phone"
                              name="phone"
                              type="phone"
                              onChange={formik.handleChange}
                              value={formik.values.phone}
                          />
                </li>
                
              </ul>
          </div>
          <button className="submit" type="submit">Submit</button>
          <button className='cancel' type="button"><NavLink to='/list'>cancel</NavLink></button>
        </form>
    </>
   );
};

export default EntryForm