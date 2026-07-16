import {
  flexRender,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 
import { useDataTable } from "@/state/useDataTable"
import type UseDataTableProps from "@/types/orders/UseDataTableProp"


export function DataTable<TData, TValue>({
  columns,
  data,
}: UseDataTableProps<TData, TValue>) {
  const table = useDataTable({ columns, data })

  return (
    <div className="overflow-hidden">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
          <TableRow>
            {table.getVisibleFlatColumns().map((column) => {
              const isTotalColumn = column.id === "total"

              return (
                <TableCell 
                  key={column.id} 
                  className={`${isTotalColumn ? "font-bold" : ""}`}
                >
                  {isTotalColumn ? "Total: 49.89 AED" : ""}
                </TableCell>
              )
            })}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

// import { Checkbox } from "@/components/ui/checkbox";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { SlidersHorizontal } from "lucide-react";

// type Order = {
//     id: number;
//     orderRef: string;
//     session: string;
//     date: string;
//     pos: string;
//     receipt: string;
//     customer: string;
//     employee: string;
//     total: string;
//     status: "New" | "Paid";
//   };
  
//   const orders: Order[] = [
//     {
//       id: 1,
//       orderRef: "/",
//       session: "Restaurant/00001",
//       date: "Jul 14, 11:07 PM",
//       pos: "Restaurant",
//       receipt: "261-1-000002",
//       customer: "",
//       employee: "developer test",
//       total: "33.61 AED",
//       status: "New",
//     },
//     {
//       id: 2,
//       orderRef: "Restaurant - 000001",
//       session: "Restaurant/00001",
//       date: "Jul 14, 11:01 PM",
//       pos: "Restaurant",
//       receipt: "261-1-000001",
//       customer: "",
//       employee: "developer test",
//       total: "16.28 AED",
//       status: "Paid",
//     },
//   ];

// const OrderTable = () => {
//   return (
//     <div className="min-h-screen bg-white text-black">
//     <div className="overflow-hidden bg-white">

//       {/* Header */}
//       <div className="flex items-center justify-end border-b border-zinc-800 p-4">
//         <Button
//           size="icon"
//           variant="ghost"
//           className="text-zinc-400 hover:bg-zinc-800 hover:text-white"
//         >
//           <SlidersHorizontal className="h-5 w-5" />
//         </Button>
//       </div>

//       <table className="w-full">
//         <thead className="border-b border-zinc-800">
//           <tr className="text-left text-sm">
//             <th className="w-12 px-4 py-4">
//               <Checkbox />
//             </th>

//             <th className="px-4 py-4">Order Ref</th>
//             <th className="px-4 py-4">Session</th>
//             <th className="px-4 py-4">Date</th>
//             <th className="px-4 py-4">Point of Sale</th>
//             <th className="px-4 py-4">Receipt Number</th>
//             <th className="px-4 py-4">Customer</th>
//             <th className="px-4 py-4">Employee</th>
//             <th className="px-4 py-4 text-right">Total</th>
//             <th className="px-4 py-4">Status</th>
//             <th className="px-4 py-4">Invoice Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {orders.map((order) => (
//             <tr
//               key={order.id}
//               className="border-b border-zinc-800 transition-colors"
//             >
//               <td className="px-4 py-5">
//                 <Checkbox />
//               </td>

//               <td className="px-4 font-medium">{order.orderRef}</td>

//               <td className="px-4">{order.session}</td>

//               <td className="px-4">{order.date}</td>

//               <td className="px-4">{order.pos}</td>

//               <td className="px-4">{order.receipt}</td>

//               <td className="px-4">
//                 {order.customer || "-"}
//               </td>

//               <td className="px-4">
//                 <div className="flex items-center gap-2">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-md font-semibold">
//                     D
//                   </div>

//                   <span>{order.employee}</span>
//                 </div>
//               </td>

//               <td className="px-4 text-right font-semibold">
//                 {order.total}
//               </td>

//               <td className="px-4">
//                 {order.status === "New" ? (
//                   <Badge className="bg-white text-black hover:bg-zinc-200">
//                     New
//                   </Badge>
//                 ) : (
//                   <Badge className="bg-zinc-700 text-white hover:bg-zinc-600">
//                     Paid
//                   </Badge>
//                 )}
//               </td>

//               <td className="px-4">—</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Footer Total */}
//       <div className="flex justify-end border-t border-zinc-800 px-6 py-5">
//         <div className="text-lg font-semibold">
//           Total: <span>49.89 AED</span>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default OrderTable