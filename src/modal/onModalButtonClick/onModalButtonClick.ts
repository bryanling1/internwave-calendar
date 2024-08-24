import { ModalButtonID } from "src/modal/getModal/types/ModalButtonID";
import { handleAddNoteButtonClick } from "src/modal/onModalButtonClick/src/handleAddNoteButtonClick/handleAddNoteButtonClick";
import { handleDeleteButtonClick } from "src/modal/onModalButtonClick/src/handleDeleteButtonClick/handleDeleteButtonClick";
import { handleSeeAllNotes } from "src/modal/onModalButtonClick/src/handleSeeAllNotesButton/handleSeeAllNotesButton";

export const onModalButtonClick = async (buttonID: string, jobID: string, data?: unknown) => {
    switch(buttonID){
        case ModalButtonID.DELETE:
            return handleDeleteButtonClick(jobID, data as string)
        case ModalButtonID.TO_ALL_NOTES:
            return handleSeeAllNotes(jobID)
        case ModalButtonID.ADD_NOTE:
            return handleAddNoteButtonClick(jobID)
    }

}
