const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ttchannel")
.then(() => console.log("Connection successful"))
.catch( (err) => console.log(err));

//schema
const playlistSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        // unique: true   .. validators
        // lowercase:true
        // trim:true
        // match ... used for regex
        // minlength:2
        // maxlength:30
        // minlength:[2, "minimum 2 letters"]
        // 
    },

    ctype : {
        type:String,
        // enum : ["Front End", "Back End"] .. only allowed values
    },
    videos : {
        type:Number,
        validate(value){
            if(value < 0){
                throw new Error("Negative values not accepted")
            }
        }
         
    },
    author : String,
    active : Boolean,
    date : {
        type:Date,
        default:Date.now
    }
})

//model
//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert
// const reactPlaylist = new Playlist({
//     name : "React JS",
//     ctype : "Front End",
//     videos : 80,
//     author : "Sujay Varma",
//     active : true
// })
// reactPlaylist.save(); //promise


// const createDocument = async () =>{
//     try{
//         const jsPlaylist = new Playlist({
//             name : "javascript",
//             ctype : "Back End",
//             videos : 50,
//             author : "Sujay Varma",
//             active : true
//         })
//         const reactPlaylist = new Playlist({
//             name : "Node JS",
//             ctype : "Back End",
//             videos : 50,
//             author : "Sujay Varma",
//             active : true
//         })
    
//         // const result = await reactPlaylist.save();  //Insert one record;

//         const result = await Playlist.insertMany([jsPlaylist, reactPlaylist]);
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }

// createDocument();


//Read document
const getDocument = async () => {
    try{
        const result = await Playlist.find(); //.find({ctype : "Front End"})
    const result1 = await Playlist.find().select({name:1});
    const result2 = await Playlist.find().select({name:1}).limit(1);
    // console.log(result2);
    }
    catch(err){
        console.log(err);
    }
}
getDocument();

//Comparison operator
const getDocumentComparison = async () => {
    try{
        const result = await Playlist.find(); //.find({ctype : "Front End"})
    const result1 = await Playlist.find().select({name:1});
    const result2 = await Playlist
    .find({ctype : "Front End", videos : {$gt :50}}).select({name:1}).limit(1);
    // console.log(result2);
    }
    catch(err){
        console.log(err);
    }
}
getDocumentComparison();
// $gte = greater than or equal to
// lte
// ctype : {$in : ["Back End", "Front End"]}
// $nin = not in


//Logical operator
const getDocumentLogical = async () => {
    try{
        const result = await Playlist.find(); //.find({ctype : "Front End"})
    const result1 = await Playlist.find().select({name:1});
    const result2 = await Playlist
    .find({$or : [ {ctype : "Back End"},
            {author : "Sujay Varma"} ]})
    .select({name:1});
    // console.log(result2);
    }
    catch(err){
        console.log(err);
    }
}
getDocumentLogical();

//$not : returns documents which do not match the query experssion
// $nor : returns all documents which fail to match both the clauses

//sorting and counting
const getDocumentCount = async () => {
    try{
        const result2 = await Playlist
    .find({$or : [ {ctype : "Back End"},
            {author : "Sujay Varma"} ]})
    .select({name:1})
    .sort({name : 1}) //1 is ascending ; -1 is desc
    // .countDocuments();
    console.log(result2);
    }
    catch(err){
        console.log(err);
    }
}
getDocumentCount();


//update 
const updateDocument = async(id) => {
    try {
        const result = await Playlist.updateOne({_id : id},
            { $set : {
                 name:"Javascript"
             }
         }); // otherwise name the argument directly _id and pass that  updateOne({_id})
         //findByIdAndUpdate - this can also be used. we need to pass new:true additionally for it to return updated document. otherwise it returns old document only

         console.log(result);
        
    } catch (error) {
        console.log(error);
    }
    
}

updateDocument("65942c18760cec648acd283d")


//delete document
const deleteDocument = async(_id) => {
    try {
        const result = await Playlist.deleteOne({_id});
        console.log(result)
        // findByIdAndDelete({_id}) gives the data which was deleted
    } catch (error) {
        console.log(error);
    }
    

}

deleteDocument("65942c18760cec648acd283d")