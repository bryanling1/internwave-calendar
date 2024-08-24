import { fetchData, IModalInput, storeData } from "@internwave/extensions-api";
import { INote, NoteID } from "../../../db/types/Note";
import { IExtensionData } from "src/db/types/ExtensionData";

export const onSubmitEditForm = async (
    jobID: string,
    data: IModalInput[],
) => {
    const {notes} = await fetchData<IExtensionData>(jobID);
    const newNotes:INote[] = notes?.map(note => {
        if (note.id === data.find(({id}) => id === NoteID.ID)?.value) {
            return {
                id: note.id,
                title: data.find(({id}) => id === NoteID.Title)?.value as string,
                startDate: data.find(({id}) => id === NoteID.Start)?.value as number,
                endDate: data.find(({id}) => id === NoteID.End)?.value as number,
                text: data.find(({id}) => id === NoteID.Text)?.value as string,
            }
        }
        return note;
    }) ?? []
    await storeData(jobID, {notes: newNotes});
}