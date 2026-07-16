import {DataTable} from "@/components/data-table"
import {columns} from "@/types/orders/columns"
import {OrdersMock} from "@/types/orders/orders-mock"

const Orders = () => {
  return (
    <div><DataTable columns={columns} data={OrdersMock}/></div>
  )
}

export default Orders