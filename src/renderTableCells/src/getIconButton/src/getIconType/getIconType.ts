import { Icons } from "@internwave/extensions-api";
import { INote } from "../../../../../db/types/Note";

export const getIconTypeFromNote = (
    note: INote
): Icons => {
    if(note.startDate || note.endDate){
        return Icons.CALENDAR
    }
    return Icons.NOTE
}