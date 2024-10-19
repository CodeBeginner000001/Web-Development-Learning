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
// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("PRE MiDDLEWARE");
// })
customerSchema.post("findOneAndDelete",async(customer)=>{
   if(customer.orders.length){
    let result = await Order.deleteMany({_id: {$in: customer.orders}})
    console.log(result);
   }
})
const Customer = mongoose.model("Customer",customerSchema)


const findCustomer = async()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0])
}
// findCustomer();

// function
const addCust = async()=>{
    let newCust = new Customer({
        name:"Karan Arjun"
    })
    let newOrder = new Order({
        item: "Burger",
        price: 165,
    })

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
}
// addCust();

const deleteorder = async()=>{
    await Order.findByIdAndDelete("671373f0cf67ad944be8613e")
    console.log("deleted")
}
// deleteorder();


const delcust = async()=>{
    let data = await Customer.findByIdAndDelete("67135abb433f016a17d984a3")
    console.log(data);
}
delcust();



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