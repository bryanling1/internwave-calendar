import { fetchData, storeData, showModal } from "@internwave/extensions-api";
import { IExtensionData } from "src/db/types/ExtensionData";
import { getListModal } from "src/modal/getModal/variants/getListModal";

export const handleDeleteButtonClick = async (jobID: string, noteID: string) => {
    const currentNotes = (await fetchData<IExtensionData>(jobID)).notes ?? [];
    const newNotes = currentNotes.filter(note => note.id !== noteID);
    await storeData(jobID, {notes: newNotes});
    return showModal(await getListModal(jobID, newNotes))
}