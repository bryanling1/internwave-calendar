import { fetchData, IModalTableRowCell, showModal } from "@internwave/extensions-api";
import { IExtensionData } from "src/db/types/ExtensionData";
import { getEditModal } from "src/modal/getModal/variants/getEditModal";

export const onModalTableRowClick = async (row: IModalTableRowCell[], jobID: string) => {
    const id = row[0].typography.text
    if(!id){
        return
    }
    const note = (await fetchData<IExtensionData>(jobID))?.notes?.find(note => note.id === id)
    if(!note){
        return;
    }
    const modal = await getEditModal(jobID, note)
    await showModal(modal)

}