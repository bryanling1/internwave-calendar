import { INote } from "../../db/types/Note"

export const notesSort = (column: "Start" | "End", type: "inactive" | "asc" | "desc") => (a: INote, b: INote) => {
    if(type === "inactive"){
        return 0
    }
    if(!a.startDate && !b.startDate){
        return 0
    }
    if(!a.startDate){
        return 1
    }
    if(!b.startDate){
        return -1
    }

    switch(column){
        case "Start":
            if(type === "asc"){
                return (a.startDate ?? 0) - (b.startDate ?? 0)
                
            }
            return (b.startDate ?? 0) - (a.startDate ?? 0)
        case "End":
        default:
            if(type === "asc"){
                return (a.endDate ?? 0) - (b.endDate ?? 0)
            }
            return (b.endDate ?? 0) - (a.endDate ?? 0)
    }
}