import { type ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { type Order } from "./orders-mock"

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderRef",
    header: "Reference",
  },
  {
    accessorKey: "session",
    header: "Session",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "reciept",
    header: "Reciept",
  },
  {
    accessorKey: "employee",
    header: "Employee",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]