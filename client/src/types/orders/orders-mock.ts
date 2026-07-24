export type Order = {
    id: number
    orderRef: string
    session: string
    date: string
    reciept: string
    customer: string
    employee: string
    total: number
    status: "New" | "Paid"
  }
import { createTableStore } from "@/state/table-store"
  import { type ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


// export const columns: ColumnDef<Order>[] = [
//   {
//     accessorKey: "orderRef",
//     header: "Reference",
//   },
//   {
//     accessorKey: "session",
//     header: "Session",
//   },
//   {
//     accessorKey: "date",
//     header: "Date",
//   },
//   {
//     accessorKey: "reciept",
//     header: "Reciept",
//   },
//   {
//     accessorKey: "employee",
//     header: "Employee",
//   },
//   {
//     accessorKey: "total",
//     header: "Total",
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
// ]


  export const OrdersMock: Order[] = [
    {
      id: 1,
      orderRef: "Restaurant - 000001",
      session: "Restaurant/00001",
      date: "Jul 14, 11:01 PM",
      reciept: "261-1-000001",
      customer: "Ahmed Ali",
      employee: "developer test",
      total: 16.2,
      status: "Paid",
    },
    {
      id: 2,
      orderRef: "Restaurant - 000002",
      session: "Restaurant/00001",
      date: "Jul 14, 11:07 PM",
      reciept: "261-1-000002",
      customer: "Sara Mohamed",
      employee: "developer test",
      total: 33.61,
      status: "New",
    },
    {
      id: 3,
      orderRef: "Restaurant - 000003",
      session: "Restaurant/00002",
      date: "Jul 15, 09:15 AM",
      reciept: "261-1-000003",
      customer: "Omar Hassan",
      employee: "cashier one",
      total: 54.90,
      status: "Paid",
    },
    {
      id: 4,
      orderRef: "Restaurant - 000004",
      session: "Restaurant/00002",
      date: "Jul 15, 10:42 AM",
      reciept: "261-1-000004",
      customer: "Mona Ibrahim",
      employee: "cashier two",
      total: 21.50,
      status: "New",
    },
    {
      id: 5,
      orderRef: "Restaurant - 000005",
      session: "Restaurant/00003",
      date: "Jul 15, 12:30 PM",
      reciept: "261-1-000005",
      customer: "Khaled Youssef",
      employee: "developer test",
      total: 78.25,
      status: "Paid",
    },
  ]

  export const ordersInitialState = {
      query: { 
        pageIndex: 0,
        pageSize: 20,
        filters:[],
        search: ""
      },
      sorting: [],
      rowSelection: {},
      columnVisibility: {},
    }