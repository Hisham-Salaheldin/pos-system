import { type ColumnDef } from "@tanstack/react-table"

export default interface UseDataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}