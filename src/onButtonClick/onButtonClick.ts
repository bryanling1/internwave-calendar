import { ModalElement, showModal } from "@internwave/extensions-api";
import { IJobData } from "../db/types/JobData";

export const onCellButtonClick = async (buttonID: string, jobData: IJobData):Promise<void> => {
    await showModal({
        elements: [
            {
                type: ModalElement.JobTitle,
                props: undefined
            }
        ]
    })
}