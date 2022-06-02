const mongoose = require("mongoose")
const Balance = require('./models/balance')
mongoose.connect("mongodb://localhost/filfox")

async function create(){
    const user =await Balance.create({
        "address": "f0155050",
        "balance": 12.85,
        "miner": "f0155050",
        "date": "2022-05-01T00:00:00.000Z",
        "day": 1,
        "month": 7,
        "timestamp": "1651363200",
        "year": 2022
    })
   await user.save()
   console.log(user)
}

//find
async function find(){
    const user = await Balance.where("address").equals("miner")
    console.log(user)
}
var amountList=
[
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    },
    {
      amount: 10,
      address: 'f3xfo2muulazpwzu6ae3szz5dppyza5phg55dbyiaht4wxbbxe7c72iuea2kqloj6ux5d37zotar3qcre7cbha',
      miner: 'f01606849'
    }
  ]
function findIndexMiner(address,arr){
    // console.log(address)
    // console.log(arr)
    for(var i=0;i<arr.length;i++){
        if(arr[i].address===address){
            return i
            console.log('found it',i)
            break
        }
    }
}
// create()
 async function getAmountList(month){
    var resultList=[]
   
    const amountStart= await Balance.find({month:month}).sort("address")
    const amountEnd= await Balance.find({month:month+1}).sort("address")
    // console.log(amountStart)
    for(var i=0;i<amountEnd.length;i++){
        if(amountEnd[i].address==amountStart[i].address)
        {    var result={}
            result["amount"]=  amountEnd[i].balance-amountStart[i].balance
            result.address=  amountEnd[i].address
            result.miner=  amountEnd[i].miner
            resultList.push(result)
            // console.log(result)
        }
    }
    // console.log('result',resultList)
    return resultList
  }


//   var result=
// getAmountList(5)
async function run(){
    var person = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
      };
      console .log(person)
      delete person.age;
      console .log(person)

}
run()

