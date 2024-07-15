const express = require("express");
const users = require("../models/userSchema");
const { ClientSession } = require("mongodb");
const router = express.Router(); 

// router.get("/",(req, res)=>{
//     console.log('connect');
// })

// register userdata

router.post("/register", async(req,res)=>{
    console.log(req.body);
    const {name,email,age,mobile,work,add,des} = req.body;
    console.log(name)
    if(!name || !email || !age || !mobile || !work || !add || !des){
        res.status(404).json("plz fill the data");
    }

    try{
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json("this is user is already present");
        }else{
            const adduser = new users({
                name,email,age,mobile,work,add,des
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);

        }

    } catch (error) {
        res.status(404).json(error)
    }  
})


// get userdata

router.get("/getdata", async(req, res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata)
    }catch(error){
        res.status(404).writableObjectMode
    }
});

// delete
// router.delete("/deleteuser/:id", async(req, res)=>{
//     try{
//         const {id} = req.params;

//         const deleteuser = await users.findByIdAndDelete({_id:id})
//         console.log(deleteuser);
//         res.status(201).json(deleteuser);

//     } catch (error){
//         res.status(422).json(deleteuser);


//     }
// })

module.exports = router;
