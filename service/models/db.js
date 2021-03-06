/*
 * 数据库连接模块 
 */

var mongoose = require('mongoose');
    mongoose.connect("mongodb://localhost:27017/blogDB");

mongoose.connection.on('connect', function() {
    console.log('Mongoose is open to:' +DB_URL);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});


// 实例1

// var TestSchema = new mongoose.Schema({
//     name : {type:String},
//     age  : {type:Number,default:0},
//     time : {type:Date,default:Date.now},
//     emial : {type:String,default:''}
// });


// var TestModel = db.model("test1", TestSchema);


// var TestEntity = new TestModel({
//     name:'helloworld',
//     age:28,
//     emial:'helloworld@qq.com'
// });

// TestEntity.save(function(err,doc){
//     if(err){
//         console.log("error :" + err);
//     } else {
//         console.log(doc);
//     }
// });


// 实例2:增删改查
// var mongooseSchema = new mongoose.Schema({
//     username: {type: String, defalut: '匿名用户'},
//     title: {type: String},
//     content: {type: String},
//     time: {type: Date, defalut: Date.now},
//     age: {type: Number}
// });


// mongooseSchema.methods.findbyusername = function(username, callback) {
//     return this.model('mongoose').find({username: username}, callback);
// };

// mongooseSchema.static.findbytitle = function(title, callback) {
//     return this.model('mongoose').find({title,title}, callback);
// };

// var mongooseModel = db.model('mongoose', mongooseSchema);

// var mongooseEntity = new mongooseModel({username: "allen"});

// mongooseEntity.save(function(error) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('saved OK!');
//     }
// });

// mongooseEntity.findbyusername('allen', function(error,result) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });



module.exports = mongoose;