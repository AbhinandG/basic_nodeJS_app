var mysql=require("mysql");
var express=require("express");
var router=express.Router();

var bodyParser=require('body-parser');

router.use(bodyParser.urlencoded());


router.get('/',function(req,res){
    res.render('formfile');
})

router.post('/addToDb',function(req,res){


var con=mysql.createConnection({
    host:"192.168.64.2",
    user:"abhi",
    password:" ",
    database:"DB_STUDENTS"
});


    con.connect(function(err){
        if(err)
            throw err;
        console.log("Connected to MYSQL SERVER!");

    var sql="INSERT INTO `TABLE_STUDENTS` (`ROLLNO`, `STUDNAME`) VALUES ( '"+req.body.ROLLNO+"', '"+req.body.STUDNAME+"'    )";
    
    con.query(sql,function(err,result){
        if(err)
            throw err;
        console.log("Added to table!");
    });

    res.render('formfile');
});

});

module.exports=router;