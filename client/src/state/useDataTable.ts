import { 
    getCoreRowModel, 
    useReactTable, 
    type Table 
  } from "@tanstack/react-table"
  
import type UseDataTableProps from "@/types/orders/UseDataTableProp"

  export function useDataTable<TData, TValue>({
    data,
    columns,
  }: UseDataTableProps<TData, TValue>): Table<TData> {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      //  sorting/filtering states here later!
    })
  
    return table
  }
  