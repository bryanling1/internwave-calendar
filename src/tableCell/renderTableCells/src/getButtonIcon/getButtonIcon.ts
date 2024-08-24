import { Icons, ITableCellButtonIcon } from "@internwave/extensions-api";
import { INote } from "../../../db/types/Note";
import { getIconTypeFromNote } from "./src/getIconType/getIconType";
import { getCalendarIconColor } from "./src/getCalendarIconColor/getCalendarIconColor";

export const getButtonIconFromNote = (
    note: INote
): ITableCellButtonIcon => {
    return {
        type: getIconTypeFromNote(note),
        color: getCalendarIconColor(note.startDate, note.endDate)
    }
}

export const getButtonIcon = (
    type: Icons,
    color?: string,
    text?: string
): ITableCellButtonIcon => {
    return {
        type,
        color,
        text
    }
}