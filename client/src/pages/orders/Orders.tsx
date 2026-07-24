import {DataTable} from "@/components/data-table"
import {OrdersMock,ordersInitialState} from "@/types/orders/orders-mock"
import {OrderColumns as columns} from "@/types/columns"
import { useTableStore } from "@/hooks/useTableStore"
import { TableProvider } from "@/providers/TableProvider"

const Orders = () => {
  return (
    <TableProvider initialState={ordersInitialState}>
      <OrdersPage />
    </TableProvider>
  )
}

const OrdersPage = () => {
  // const query = useTableStore((state) => state.query)
  // const data = useDataFetch(query)
  return (
    <DataTable columns={columns} data={OrdersMock} />
  )
}
export default Orders