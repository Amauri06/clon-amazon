
// 'use client'

// import { collection, query, orderBy } from '@firebase/firestore';
// import db from '../firebase/firebase'
// import moment from 'moment';
// import { useSession} from "next-auth/react"
// import { useCollection} from 'react-firebase-hooks/firestore';

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const GetOrders = async () =>{

//    const { data: session } = useSession()
 
//   // query Firebase db
//   const [orders] = useCollection(
//    session &&
//    query(
//      collection(db, "users", session.user?.email, "orders"),
//      orderBy("timestamp", "desc"),
//   ))



// // Stripe Order

// const stripeOrders =  orders?.docs.map( async (order) => (

//        {
//           id: order.id,
//           amount: order.data().amount,
//           amountShipping: order.data().amount_shipping,
//           images: order.data().images,
//           timestamp : moment(order.data().timestamp.toDate()).unix(),
//           items: (
//                   await stripe.checkout.sessions.listLineItems(order.id,{
//                      limit: 100,
//                  })
//           ).data,
  
//        }
//     ))  
    
//     return  stripeOrders
// }


// export default GetOrders