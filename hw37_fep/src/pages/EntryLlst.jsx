import { useSelector } from "react-redux";
import Entry from "../components/Entry";

function EntryList() {
    const list = useSelector(state => state.list.value)
    
    return (
            <>
                {list.length < 1 ? <p>No entries</p> : (
                    <>
                    <h1>List of entries</h1>
                        <div className="list">
                            {list.map((entry) => (
                                <Entry key={entry.id} entry={entry}
                                />
                            ))}
                        </div>
                    </>)
                }
            </>
        )
}

export default EntryList