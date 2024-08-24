import { initExtensionAPI } from "@internwave/extensions-api"
import { onModalTableColumnReorder } from "./modal/onModalTableColumnReorder/onModalTableColumnReorder"
import { onSubmitModalForm } from "./modal/onSubmitModalForm/onSubmitModalForm"
import { onCellButtonClick } from "./tableCell/onButtonClick/onButtonClick"
import { onRenderTableCells } from "./tableCell/renderTableCells/onRenderTableCells"
import { onModalTableRowClick } from "src/modal/onModalTableRowClick.ts/onModalTableRowClick"
import { onModalButtonClick } from "src/modal/onModalButtonClick/onModalButtonClick"

initExtensionAPI(
    {
        JobTableAPI: {
            tableCell: {
                onRenderTableCells,
                onCellButtonClick,
            },
            modal: {
                onSubmitForm: onSubmitModalForm,
                onTableColumnReorder: onModalTableColumnReorder,
                onTableRowClick: onModalTableRowClick,
                onModalButtonClick
            }
        }
    }
)