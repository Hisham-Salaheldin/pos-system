import { createContext, useRef } from "react"
import type { StoreApi } from "zustand"
import type { TableState,TableStore} from "@/types/table.types"
import { createTableStore } from "@/state/table-store"

export const TableContext = createContext<StoreApi<TableStore> | null>(null)

interface TableProviderProps {
  initialState: TableState
  children: React.ReactNode
}
export const TableProvider = ({initialState,children}: TableProviderProps) => {
  const storeRef = useRef<StoreApi<TableStore> | null>(null)
  
  if(!storeRef.current){
    storeRef.current = createTableStore({initialState})
  }
  return(
      <TableContext.Provider value={storeRef.current}>
        {children}
      </TableContext.Provider>
  )

}


// // @/components/data-table/table-provider.tsx
// "use client"

// import React, { createContext, useContext, useState, useMemo } from "react"
// import {
//  type ColumnDef,
//   getCoreRowModel,
//   getSortedRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getExpandedRowModel,
//   useReactTable,
//   type Table as TanStackTable,
//   type SortingState,
//   type RowSelectionState,
//   type VisibilityState,
// } from "@tanstack/react-table"

// interface TableContextType<TData> {
//   table: TanStackTable<TData>
//   globalFilter: string
//   setGlobalFilter: (value: string) => void
//   formattedTotal: string // Added to pass down the calculated value
// }

// const TableContext = createContext<TableContextType<any> | undefined>(undefined)

// interface TableProviderProps<TData, TValue> {
//   data: TData[]
//   columns: ColumnDef<TData, TValue>[]
//   children: React.ReactNode
//   initialPageSize?: number
//   // Pass down the field string key you want to sum up (e.g., "total")
//   totalFieldKey?: string 
// }

// export function TableProvider<TData, TValue>({
//   data,
//   columns,
//   children,
//   initialPageSize = 10,
//   totalFieldKey = "total", 
// }: TableProviderProps<TData, TValue>) {
//   const [sorting, setSorting] = useState<SortingState>([])
//   const [globalFilter, setGlobalFilter] = useState("")
//   const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: initialPageSize,
//   })

//   const table = useReactTable({
//     data,
//     columns,
//     state: { sorting, globalFilter, rowSelection, columnVisibility, pagination },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setGlobalFilter,
//     onRowSelectionChange: setRowSelection,
//     onColumnVisibilityChange: setColumnVisibility,
//     onPaginationChange: setPagination,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   })

//   // Dynamic Total Calculation Engine
//   const formattedTotal = useMemo(() => {
//     // 1. Get current rows matching active filtering or sorting
//     const activeRows = table.getFilteredRowModel().rows

//     // 2. Reduce row raw data values down to a single numeric sum
//     const totalSum = activeRows.reduce((sum, row) => {
//       const rawValue = row.getValue(totalFieldKey) as string | number
      
//       if (!rawValue) return sum

//       // Sanitization: Strip alphabetical currency symbols like 'AED' or '$'
//       const numericValue = typeof rawValue === "string" 
//         ? parseFloat(rawValue.replace(/[^0-9.-]/g, "")) 
//         : rawValue

//       return sum + (isNaN(numericValue) ? 0 : numericValue)
//     }, 0)

//     // 3. Format output string directly into standard UAE regional currency formatting
//     return new Intl.NumberFormat("en-AE", {
//       style: "currency",
//       currency: "AED",
//     }).format(totalSum)
//   }, [table.getFilteredRowModel().rows, totalFieldKey])

//   return (
//     <TableContext.Provider value={{ table, globalFilter, setGlobalFilter, formattedTotal }}>
//       {children}
//     </TableContext.Provider>
//   )
// }

// export function useTableContext<TData>() {
//   const context = useContext(TableContext)
//   if (!context) throw new Error("useTableContext must be wrapped within a <TableProvider />")
//   return context as TableContextType<TData>
// }
