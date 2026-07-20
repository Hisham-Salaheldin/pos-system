import {createStore} from "zustand/vanilla"
import type { TableState,TableStore } from "@/types/table.types"

export interface TableStoreOptions {
    initialState : TableState
}

export const createTableStore = ({ initialState }: TableStoreOptions) => {
    return createStore<TableStore>((set) => ({
        ...initialState,

        // update query state
        updateQuery : (query) => 
            set((state)=>({
                query : {
                    ...state.query,
                    ...query,
                
                },
            }))
        
    })

)}