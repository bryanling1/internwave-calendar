import { TableCellButtonIcon } from "@internwave/extensions-api";
import { INote } from "../../../../../db/types/Note";

export const getIconType = (
    note: INote
): TableCellButtonIcon => {
    if(note.startDate || note.endDate){
        return TableCellButtonIcon.CALENDAR
    }
    return TableCellButtonIcon.NOTE
}