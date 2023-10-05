import { v4 as uuidv4 } from 'uuid';

export function sortedList(array) {
    // console.log('we are sorting', array)
    return array.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
};

//Form list of entris with deleted entry
export function DeleteEntryFromList(list, entry) {
    const updatedList = list.filter((el) => el !== entry);
    return updatedList;
};

//Form list of entris with EDITED entry
export function EditEntryInList(list, entry) {
    const updatedList = list.filter((el) => el.id !== entry.id);
    updatedList.push(entry);
    return sortedList(updatedList);
};

//Form list of entris with EDITED entry
export function AddEntryToList(list, values) {
    let entry = {
        ...values,
        id: uuidv4(),
    }
    const updatedList = structuredClone(list);
    updatedList.push(entry)
    return sortedList(updatedList);
};
