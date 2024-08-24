import { storeData } from "@internwave/extensions-api";
import { getEditModal } from "src/modal/getModal/variants/getEditModal";
import { INote } from "src/db/types/Note";
import { v4 as uuidv4 } from 'uuid';
import { IJobData } from "src/db/types/JobData";


export const onAddButtonClick = async (jobData: IJobData) => {
    const newNote: INote = {
        id: uuidv4(),
        title: "New note",
    }
    const currentNotes = jobData.extensionData.notes;
    const notes = currentNotes ? [...currentNotes, newNote] : [newNote];
    await storeData(jobData.id, {notes});
    return getEditModal(jobData.id, newNote)
}