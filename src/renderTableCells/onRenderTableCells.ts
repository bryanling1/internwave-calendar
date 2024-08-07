import { ITableCell, ITableCellElement, TableCellElementType, TableCellButtonIcon } from "@internwave/extensions-api";
import { IJobData } from "../db/types/JobData";

export const onRenderTableCells = async (jobsData: IJobData[]) => {
    const out: ITableCell[] = [];
    for(const jobData of jobsData){
        const jobElements:ITableCellElement[] = []
        for(const [index, note] of jobData.extensionData.notes.entries()){
            jobElements.push({
                type: TableCellElementType.IconButton,
                id: index.toString(),
                icon: {
                    type: TableCellButtonIcon.CALENDAR,
                    color: "blue",
                }
            })
        }
    }
    return out;
}