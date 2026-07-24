import {
    getSortedRowModel,
    getCoreRowModel, 
    useReactTable, 
    type Table 
  } from "@tanstack/react-table"
import {useTableStore} from "./useTableStore"
import type UseDataTableProps from "@/types/UseDataTableProp"

export function useDataTable<TData, TValue>({
    data,
    columns,
  }: UseDataTableProps<TData, TValue>): Table<TData> {

  //query
  const query = useTableStore((state) => state.query)
  const pagination = {
    pageIndex: query?.pageIndex ?? 0,
    pageSize: query?.pageSize ?? 20,
  }
  const updateQuery = useTableStore((state) => state.updateQuery)

  //sorting
  const sorting = useTableStore((state) => state.sorting)
  const updateSorting = useTableStore((state) => state.updateSorting)

  // row selection
  const rowSelection =  useTableStore((state) => state.rowSelection)
  const updateRowSelection = useTableStore((state) => state.updateRowSelection)

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      rowSelection,
    },
    manualPagination: true,

    onPaginationChange: (updater) => {
      const newPagination = typeof updater === "function" ? updater(pagination) : updater
      updateQuery(newPagination)
    }, 
    onSortingChange : (updater) => {
      const newSorting = typeof updater === "function" ? updater(sorting) : updater
      updateSorting(newSorting)
    },
    onRowSelectionChange : (updater) => {
      const newRowSelection = typeof updater === "function" ? updater(rowSelection) : updater
      updateRowSelection(newRowSelection)
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    //  sorting/filtering states here later!
  })
  
  return table
}
  