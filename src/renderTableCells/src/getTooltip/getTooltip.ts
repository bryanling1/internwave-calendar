import { ITableCellButtonTooltip, ITableCellText } from "@internwave/extensions-api";
import { INote } from "../../../db/types/Note";
import moment from "moment";
import { getCalendarIconColor } from "../getButtonIcon/src/getCalendarIconColor/getCalendarIconColor";
import { Color } from "../../../styles/Color";
import { getStartEndTextColor } from "../getButtonIcon/src/getStartEndTextColor/getStartEndTextColor";

const FORMAT = 'MMMM Do YYYY, h:mm:ss a'
export const getTooltip = (
    note: INote
): ITableCellButtonTooltip => {
    const title: ITableCellText = {
        text: note.title,
        fontWeight: "bold"
    }
    const subtitles: ITableCellText[] = []
    const startTextText: string | undefined = note.startDate ? 
        `Start: ${moment(note.startDate).format(FORMAT)}` : 
        undefined
    const endTextText: string | undefined = note.endDate ?
        `End: ${moment(note.endDate).format(FORMAT)}` :
        undefined

    const {
        startColor,
        endColor
    } = getStartEndTextColor(note.startDate, note.endDate)

    if(startTextText !== undefined){
        subtitles.push({
            text: startTextText,
            color: startColor
        })
    }
    if(endTextText !== undefined){
        subtitles.push({
            text: endTextText,
            color: endColor
        })
    }
    
    return {
        title,
        subtitles: subtitles .length > 0 ? subtitles : undefined
    }
}