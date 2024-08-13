import { initExtensionAPI } from "@internwave/extensions-api"
import { onRenderTableCells } from "./renderTableCells/onRenderTableCells"
import { onCellButtonClick } from "./onButtonClick/onButtonClick"

initExtensionAPI(
    {
        JobTableAPI: {
            onRenderTableCells,
            onCellButtonClick,
        }
    }
)