const Model = require('../Model/UserModel')
const {z} = require('zod');

// module.exports.createUser = async(req,res)=>{
//     try {
//         const {Name, LastName, Email} = req.body;
//         const schema = z.object({
//             Name: z.string().min(1),
//             LastName: z.string().min(1),
//             Email: z.string().email()
//         })

//         await schema.parse({Name, LastName, Email});

//         const Exist = await Model.findOne({Email})
//         if(Exist){
//             console.log("Email already exists");
//             return res.status(409).send("Email already exists");
//         }

//         const newUser = new Model({Name, LastName, Email})
//         await newUser.save()
//         res.status(201).send("User created successfully")
        
//     } catch (error) {
//         console.error("Error creating user", error);
//         res.status(500).send("Error while creating user");
//     }
// }


module.exports.createUser = async(req,res)=>{
    try {
        const {Name, LastName, Email} = req.body;
        const schema = z.object({
            Name: z.string().min(1),
            LastName: z.string().min(1),
            Email: z.string().email()
        })

        await schema.parse({Name, LastName, Email});

        const Exist = await Model.findOne({Email})
        if(Exist){
            console.log("Email already exists");
            return res.status(409).send("Email already exists");
        }

        await Model.insert({Name, LastName, Email})
        res.status(201).send("User created successfully")
        
    } catch (error) {
        console.error("Error creating user", error);
        res.status(500).send("Error while creating user");
    }
}



module.exports.updateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const update = await Model.findByIdAndUpdate(id, req.body, {new: true});
        if(!update){
            return res.status(404).send("Couldn't find user with id " + id + " in the database");
        }
        res.send("User updated successfully");
    } catch (error) {
        console.error("Error updating user", error);
        res.status(500).send("Error while updating user");
    }
}

module.exports.readDB = async(req, res) => {
    try {
        const find = await Model.find({});
        if(find.length === 0){
            return res.status(404).send("DB is not found");
        }
        res.send(find);
    } catch (error) {
        console.error("Error while reading", error);
        res.status(500).send("Error while reading");
    }
}

module.exports.deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        const remove = await Model.findByIdAndDelete(id);
        if(!remove){
            return res.status(404).send("Couldn't find user with id " + id + " in the database");
        }
        res.send("User deleted");
        
    } catch (error) {
        console.error("Error while deleting user", error);
        res.status(500).send("Error while deleting user", error);
    }
}