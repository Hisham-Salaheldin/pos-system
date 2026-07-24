import { useStore } from "zustand"
import type { TableStore } from "@/types/table.types"
import {useContext} from "react"
import { TableContext } from "@/providers/TableProvider"

export const useTableStore = <T>(
    selector: (state: TableStore) => T
) => {
    const store = useContext(TableContext)
    if(!store) throw new Error("Table provider not found")


    return useStore(store, selector)
}