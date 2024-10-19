const mongoose = require("mongoose");
const {Schema} = mongoose;
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}
main()
 .then(()=> console.log("Connection Successful"))
 .catch((err)=> console.log(err))

const orderSchema = new Schema ({
    item: String,
    price: Number,
})

const Order = mongoose.model("Order",orderSchema);

const customerSchema = new Schema ({
    name:String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})
const Customer = mongoose.model("Customer",customerSchema)

const findCustomer = async()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0])
}
findCustomer();

// const addcustomer = async ()=>{
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });
//     let order1 = await Order.findOne({item:"Chips"});
//     let order2 = await Order.findOne({item:"Pizza"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);
//     let res = await cust1.save();
//     console.log(res);
// }
// addcustomer();

// const addorders = async()=>{
//     let res = await Order.insertMany([
//         {
//         item: "samosa",
//         price:12,
//         },
//         {
//             item: "Chips",
//             price: 10,
//         },
//         {
//             item: "Pizza",
//             price:40,
//         }
//     ]);
//     console.log(res);
// }
// addorders();