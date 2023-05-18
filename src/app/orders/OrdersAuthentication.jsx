'use client'

// import getOrders from "@/firebase/GetOrders,"
import { useSession } from "next-auth/react"

 function OrdersAuthentication() {

  const { data: session } = useSession()
    // const orders =  getOrders()
   

 

  return (
    <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b pb-1 border-yellow-400">
          Your Orders{" "}
        </h1>
        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4"></div>
     </main>
  )
}

export default OrdersAuthentication