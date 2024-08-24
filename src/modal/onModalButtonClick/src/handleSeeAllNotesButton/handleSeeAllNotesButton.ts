import { fetchData, showModal } from "@internwave/extensions-api";
import { IExtensionData } from "src/db/types/ExtensionData";
import { getListModal } from "src/modal/getModal/variants/getListModal";

export const handleSeeAllNotes = async (jobID: string) => {
    const {notes} = await fetchData<IExtensionData>(jobID);
    const modal = await getListModal(jobID, notes);
    return showModal(modal);
}