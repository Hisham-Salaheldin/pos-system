import { type ColumnDef } from "@tanstack/react-table"
import { type Order } from "./orders/orders-mock"
import DataTableHeaderButton from "@/components/DataTableHeaderButton"
import { Checkbox } from "@/components/ui/checkbox"

export const OrderColumns: ColumnDef<Order>[] = [
  {
    id: 'select-col',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(value)} //or getToggleAllPageRowsSelectedHandler
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={row.getToggleSelectedHandler()}
      />
    ),
  },
    {
      accessorKey: "orderRef",
      header: () => (<DataTableHeaderButton title={"Refrence"}/>)
    },
    {
      accessorKey: "session",
      header: () => (<DataTableHeaderButton title={"Session"}/>)
    },
    {
      accessorKey: "date",
      header: ({column}) => (<DataTableHeaderButton title={"Date"} onClick={() => column.toggleSorting() } />),
    },
    {
      accessorKey: "reciept",
      header: () => (<DataTableHeaderButton title={"Reciept"}/>)
    },
    {
      accessorKey: "employee",
      header: () => (<DataTableHeaderButton title={"Employee"}/>)
    },
    {
      accessorKey: "total",
      header: () => (<DataTableHeaderButton title={"Total"}/>)
    },
    {
      accessorKey: "status",
      header: () => (<DataTableHeaderButton title={"Status"}/>)
    },
]