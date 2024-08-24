import { Icons, IModal, IModalTableRow, ModalElement } from "@internwave/extensions-api"
import moment from "moment"
import { INote } from "../../../db/types/Note"
import { notesSort } from "../../../utils/Notes/sort"
import { getStartEndTextColor } from "src/tableCell/renderTableCells/src/getButtonIcon/src/getStartEndTextColor/getStartEndTextColor"
import { ModalButtonID } from "src/modal/getModal/types/ModalButtonID"
import { ModalType } from "src/modal/getModal/types/ModalType"

export const getListModal = async (
    jobID: string, 
    notes?: INote[], 
    columnSort: "Start" | "End" = "End", 
    sort: "inactive" | "asc" | "desc" = "asc"
):Promise<IModal> => {
    const rows: IModalTableRow[] = []
    for(const note of (notes ?? []).sort(notesSort(columnSort, sort))){
        const {
            startColor,
            endColor
        } = getStartEndTextColor(note.startDate, note.endDate)
        rows.push({
            cells: [
                {
                    typography:{
                            text: note.id
                    }
                },
                {
                    typography:{
                            text: note.title
                        },
                    align: "left",
                    endIcon: note.text && JSON.parse(note?.text ?? "{}")?.blocks.length ? Icons.NOTE : undefined,
                },
                {
                    typography: {
                            text: note.startDate ? moment(note.startDate).format("MMM Do[\n]h:mm a") : "",
                            color: startColor,
                            fontSize: "12px"
                    },
                    align: "right",
                    width: "25%"
                },
                {
                    typography: { 
                        text: note.endDate ?  moment(note.endDate).format("MMM Do[\n]h:mm a") : "",
                        color: endColor,
                        fontSize: "12px"
                    },
                    align: "right",
                    width: "25%"
                },
            ]
        })
    }
    const out: IModal = {
        type: ModalType.LIST,
        canToggleFullView: true,
        elements: [
            {
                type: ModalElement.JobTitle,
                props: undefined
            },
            {
                type: ModalElement.Table,
                props: {
                    rows: rows,
                    head: {
                        cells: [
                            {
                                label: "id",
                                hidden: true
                            },
                            {
                                label: "",
                                align: "left",
                            },
                            {
                                label: "Start",
                                sortOnClick: true,
                                sort: columnSort === "Start" ? sort : "inactive"
                            },
                            {
                                "label": "End",
                                sortOnClick: true,
                                sort: columnSort === "End" ? sort : "inactive"
                            }
                        ]
                    }
                }
            },
            {
                type: ModalElement.Button,
                props: {
                    label: "Add note",
                    icon: Icons.ADD,
                    align: "center",
                    variant: "primary",
                    onClick: {
                        buttonID: ModalButtonID.ADD_NOTE,
                        jobID
                    }
                }
            },
        ],
        
    }

    return out
}