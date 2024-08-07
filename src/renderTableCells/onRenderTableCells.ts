import { ITableCell, ITableCellElement, TableCellElementType } from "@internwave/extensions-api";
import { IJobData } from "../db/types/JobData";
import { getButtonIconFromNote } from "./src/getButtonIcon/getButtonIcon";
import { getTooltip } from "./src/getTooltip/getTooltip";
import { getTrailingButtons } from "./src/getTrailingButtons/getTrailingButtons";

export const MAX_NOTES = 3
export const onRenderTableCells = async (jobsData: IJobData[]) => {
    const out: ITableCell[] = [];
    for(const jobData of jobsData){
        const jobElements:ITableCellElement[] = []
        for(const [index, note] of (jobData.extensionData.notes ?? []).entries()){
            jobElements.push({
                type: TableCellElementType.IconButton,
                id: index.toString(),
                icon: getButtonIconFromNote(note),
                tooltip: getTooltip(note)
            })
        }
        jobElements.push(
            ...getTrailingButtons(jobData.extensionData.notes?.length ?? 0, MAX_NOTES)
        )
        out.push({
            elements: jobElements
        })
    }
    return out;
}
