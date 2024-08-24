import { IModal, showModal } from "@internwave/extensions-api";
import { IJobData } from "../../db/types/JobData";
import { getEditModal } from "src/modal/getModal/variants/getEditModal";
import { getListModal } from "src/modal/getModal/variants/getListModal";
import { ButtonId } from "src/tableCell/renderTableCells/src/types/ButtonId";
import { onAddButtonClick } from "src/tableCell/onButtonClick/src/onAddButtonClick";

export const onCellButtonClick = async (buttonID: string, jobData: IJobData):Promise<void> => {
    let modal: IModal;
    switch(buttonID){
        case ButtonId.ADD:
            modal = await onAddButtonClick(jobData)
            break;
        case ButtonId.MORE:
            modal = await getListModal(jobData.id, jobData.extensionData.notes)
            break;
        default:
            if(!jobData.extensionData.notes){
                return
            }
            modal = await getEditModal(jobData.id, jobData.extensionData.notes[parseInt(buttonID)])
            break;
    }
    if(!modal){
        return;
    }
    await showModal(modal);
}


