import { Icons, IModal, ModalElement } from "@internwave/extensions-api";
import { INote, NoteID } from "../../../db/types/Note";
import { ModalType } from "src/modal/getModal/types/ModalType";
import { ModalButtonID } from "src/modal/getModal/types/ModalButtonID";

export const getEditModal = async (jobID: string, note: INote):Promise<IModal> => {
    const out: IModal = {
        type: ModalType.EDIT,
        canToggleFullView: true,
        elements: [
            {
                type: ModalElement.JobTitle,
                props: undefined
            },
            {
                type: ModalElement.Form,
                props: {
                    useDebounce: true,
                    columns: 2,
                    inputs: [
                        {
                            id: NoteID.ID,
                            hidden: true,
                            value: note.id,
                            type: "string",
                            label: "ID"
                        },
                        {
                            id: NoteID.Title,
                            label: "Title",
                            type: "string",
                            required: true,
                            value: note?.title,
                        },
                        {
                            id:  NoteID.Start,
                            label: "Start",
                            type: "date",
                            span: 1,
                            value: note?.startDate
                        },
                        {
                            id: NoteID.End,
                            label: "End",
                            type: "date",
                            span: 1,
                            value: note?.endDate
                        },
                        {
                            id: NoteID.Text,
                            label: "",
                            type: "textEditor",
                            value: note?.text
                        },
                    ]
                }
            },
            {
                type: ModalElement.Button,
                props: {
                    icon: Icons.DELETE,
                    label: "Delete",
                    align: "center",
                    variant: "text",
                    color: "#6C818F",
                    onClick: {
                        buttonID: ModalButtonID.DELETE,
                        jobID,
                        data: note.id
                    }
                }
            }
        ],
        headerButtons: [
            {
                icon: Icons.LEFT_ARROW,
                onClick: {
                    buttonID: ModalButtonID.TO_ALL_NOTES,
                    jobID,
                }
            }
        ]
        
    }

    return out
}