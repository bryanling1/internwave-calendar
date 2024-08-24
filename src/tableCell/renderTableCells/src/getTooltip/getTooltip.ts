import { ITableCellButtonTooltip, ITypography} from "@internwave/extensions-api";
import moment from "moment";
import { getStartEndTextColor } from "../getButtonIcon/src/getStartEndTextColor/getStartEndTextColor";
import { INote } from "src/db/types/Note";

const FORMAT = 'MMMM Do, h:mm a'
export const getTooltip = (
    note: INote
): ITableCellButtonTooltip => {
    const title: ITypography = {
        text: note.title,
        fontWeight: "bold"
    }
    const subtitles: ITypography[] = []
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