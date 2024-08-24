import { getCalendarIconColor } from "src/tableCell/renderTableCells/src/getButtonIcon/src/getCalendarIconColor/getCalendarIconColor";
import { Color } from "../../../../../../styles/Color";
import moment from "moment";

export const getStartEndTextColor = (
    start?: number,
    end?: number
): {
    startColor: Color | undefined;
    endColor: Color | undefined;
} => {
    const startColor = getCalendarIconColor(start, end)
    let endColor = getCalendarIconColor(end, start)
    if(start !==  undefined && end !== undefined){
        if(moment().isBetween(start, end)){
            //if current is within 1 minute of end
            if(moment().isBetween(moment(end).subtract(1, 'minute'), end)){
                endColor = Color.Green
            }else if( moment().isBefore(moment(end).subtract(1, 'day'))){
                endColor = undefined
            }else if(moment().isAfter(moment(end).subtract(1, 'day'))){
                endColor = Color.Yellow
            }
        }else if(moment().isBefore(start)){
            endColor = undefined;
        }
    }
    return {
        startColor,
        endColor
    }
}