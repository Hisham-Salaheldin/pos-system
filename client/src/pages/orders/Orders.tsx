import {DataTable} from "@/components/data-table"

import {OrdersMock,columns} from "@/types/orders/orders-mock"

const Orders = () => {
  return (
    <div><DataTable columns={columns} data={OrdersMock}/></div>
  )
}

export default Orders