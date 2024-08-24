import { fetchData, showModal } from "@internwave/extensions-api";
import { IExtensionData } from "src/db/types/ExtensionData";
import { onAddButtonClick } from "src/tableCell/onButtonClick/src/onAddButtonClick";

export const handleAddNoteButtonClick = async (jobID: string) => {
    const jobData = {
        id: jobID,
        extensionData: await fetchData<IExtensionData>(jobID)
    }
    const modal = await onAddButtonClick(jobData)
    return showModal(modal);
}