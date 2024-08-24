import { fetchData, showModal, TableColumnSort } from "@internwave/extensions-api";
import { IExtensionData } from "src/db/types/ExtensionData";
import { getListModal } from "src/modal/getModal/variants/getListModal";

export const onModalTableColumnReorder = async (label: string, sort: TableColumnSort, jobID: string) => {
    const nextState = (() => {
        switch(sort){
            case "inactive":
                return "asc"
            case "asc":
                return "desc"
            case "desc":
                return "inactive"
        }
    })()
    const notes = await fetchData<IExtensionData>(jobID).then(data => data.notes)
    const modal = await getListModal(jobID, notes, label as "Start" | "End", nextState)
    return showModal(modal)
}