import { useFormik } from 'formik';
import { React } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EditEntryInList } from '../store';
import { UPDATE_ENTRY } from '../store/slice';
 
function EditForm() {
    let entry = useLocation().state;
    const navigate = useNavigate();
    const list = useSelector(state => state.list.value)
    const dispatch = useDispatch();

//Dispatcher to update the list in state with target entry EDITED
    const EditEntryInState = (entry) => {
                                            dispatch(UPDATE_ENTRY(EditEntryInList(list, entry)))
                                        }
       
    const formik = useFormik({
                                initialValues: {
                                                    name: entry.name,
                                                    phone: entry.phone,
                                                    id: entry.id,
                                                },
                                onSubmit: (values) => {
                                                            if (values.name && values.phone) {
                                                                        EditEntryInState(values);
                                                                        navigate('/list');
                                                                    } else {
                                                                            alert('Please enter all mandatory data');
                                                                            }
                                                        },
                            });
    
    return (
         <>
            <h1>Edit entry {entry.name}</h1>
            <form onSubmit={formik.handleSubmit}>
            <div className='card_cntr'>
              <ul className="card">
                    <li>
                          <label htmlFor="firstName">Name</label>
                          <input
                              id="name"
                              name="name"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.name}
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

export default EditForm