import { IModalInput } from "@internwave/extensions-api"
import { onSubmitEditForm } from "./src/onSubmitEditForm";
import { ModalType } from "src/modal/getModal/types/ModalType";

export const onSubmitModalForm = async (
    type: string,
    jobID: string,
    data: IModalInput[],
):Promise<void> => {
    switch(type){
        case ModalType.EDIT:
            return onSubmitEditForm(jobID, data)
    }
}