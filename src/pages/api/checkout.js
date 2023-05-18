

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default  async function handler (req, res)  {

  const { items, email } = req.body;


  const trasnformedItems = items.map((item) => (
    
    {
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }
  
  ));

  const session = await stripe.checkout.sessions.create({
    
      line_items: trasnformedItems,
      mode: 'payment',
        payment_method_types: ['card'],
        shipping_options: [
            {
              shipping_rate: 'shr_1N74cmICNIRzetjdwfRfgKZ7'
            }
        ],

        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA'],
        },
        success_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
        cancel_url:`${process.env.NEXT_PUBLIC_HOST}/cancel`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item =>  item.image))
        }
    
  });

  res.status(200).json({id: session.id})
};
