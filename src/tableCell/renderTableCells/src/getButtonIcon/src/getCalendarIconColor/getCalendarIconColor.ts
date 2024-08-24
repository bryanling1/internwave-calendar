import moment from "moment";
import { Color } from "../../../../../../styles/Color";

export const getCalendarIconColor = (
    startDate?: number,
    endDate?: number
): Color | undefined => {
    if(startDate === undefined && endDate === undefined){
        return undefined;
    }
    if(startDate !== undefined){
        if(endDate === undefined){
            if(moment().isAfter(startDate)){
                return Color.Green;
            }
            else if(moment().isAfter(moment(startDate).subtract(1, "day"))){
                return Color.Yellow;
            }else{
                return undefined
            }
        }
        if(moment().isBetween(startDate, endDate)){
            return Color.Green;
        }else if(moment().isBetween(moment(startDate).subtract(1, "day"), startDate)){
            return Color.Yellow;
        }else if(moment().isAfter(endDate)){
            return Color.Red;
        }
        return undefined
    }
    if(moment().isAfter(endDate)){
        return Color.Red;
    }else if(moment().isBetween(moment(endDate).subtract(1, "day"), endDate)){
        return Color.Yellow;
    }else if (moment().isSame(endDate)){
        return Color.Green;
    }
    return undefined
}