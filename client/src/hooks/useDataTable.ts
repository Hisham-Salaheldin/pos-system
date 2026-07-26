import {
    getSortedRowModel,
    getCoreRowModel, 
    useReactTable, 
    type Table 
  } from "@tanstack/react-table"
import {useTableStore} from "./useTableStore"
import type UseDataTableProps from "@/types/UseDataTableProp"
import {resolveUpdater} from "@/utiles/resolveUpdater"

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

  // column visibilty
  const columnVisibility = useTableStore((state) => state.columnVisibility)
  const updateColumnVisibilty = useTableStore((state) => state.updateColumnVisibilty)

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      rowSelection,
      columnVisibility,
    },
    manualPagination: true,

    onPaginationChange: (updater) => {
      const newPagination = resolveUpdater(updater,pagination)
      updateQuery(newPagination)
    }, 
    onSortingChange : (updater) => {
      const newSorting = resolveUpdater(updater,sorting)
      updateSorting(newSorting)
    },
    onRowSelectionChange : (updater) => {
      const newRowSelection = resolveUpdater(updater,rowSelection)
      updateRowSelection(newRowSelection)
    },
    onColumnVisibilityChange : (updater) => {
      const newColumnVisibilty = resolveUpdater(updater,columnVisibility)
      updateColumnVisibilty(newColumnVisibilty)
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    //  sorting/filtering states here later!
  })
  
  return table
}
  