import { ITableCellElement, ITableCellIconButton, TableCellButtonIcon, TableCellElementType } from "@internwave/extensions-api";
import { ButtonId } from "../types/ButtonId";

export const getTrailingButtons = (
    notes: number,
    maxNotes: number
):ITableCellElement[] => {
    const out: ITableCellElement[] = [];
    const addButton: ITableCellIconButton = {
        type: TableCellElementType.IconButton,
        id: ButtonId.ADD,
        icon: {
            type: TableCellButtonIcon.ADD
        }
    }

    if(notes > maxNotes){
        out.push({
            type: TableCellElementType.IconButton,
            id: ButtonId.MORE,
            icon: {
                type: TableCellButtonIcon.CIRCLE,
                text: `+${notes - maxNotes}`
            }
        })
    }

    out.push(addButton)
    return out;
}