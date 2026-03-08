import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRouter } from './app/modules/product/product.route'
import { orderRouter } from './app/modules/order/order.route'
const app = express()


//parser
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/products' , productRouter)
app.use('/api/v1/orders' , orderRouter)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})

export default app;
