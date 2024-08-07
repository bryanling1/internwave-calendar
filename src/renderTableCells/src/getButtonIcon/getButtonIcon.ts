import { ITableCellButtonIcon } from "@internwave/extensions-api";
import { INote } from "../../../db/types/Note";
import { getIconType } from "./src/getIconType/getIconType";

export const getButtonIcon = (
    note: INote
): ITableCellButtonIcon => {
    return {
        type: getIconType(note),
        color: 'red'
    }
}