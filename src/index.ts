import { initExtensionAPI, storeData, fetchData, ITableCell, ITableCellElement, TableCellElementType, TableCellButtonIcon} from "@internwave/extensions-api"
import { onRenderTableCells } from "./renderTableCells/onRenderTableCells"

initExtensionAPI(
    {
        JobTableAPI: {
            onRenderTableCells
        }
    }
)