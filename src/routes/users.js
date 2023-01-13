const {Router}  = require('express');
const router = Router();

const mysqlConnection = require('../db');
router.get('/',(req,res)=>{
    res.status(200).json('Server on port 25060');

});
router.get('/:users',(req,res)=>{
mysqlConnection.query('select * from user;',(error, rows, fields)=>{
    if(!error)
    {
        res.json(rows);
    }
    else
    {
        console.log(error);
    }
})
});
router.get('/:users/:id',(req,res)=>{
    const {phone} = req.params;
    mysqlConnection.query('select * from user where id = ?',[phone],(error,rows,fields)=>{
        if(!error)
        {
            res.json(rows);
        }
        else
        {
            console.log(error);
        }
    });

});
router.post('/:users',(req,res)=>{
    const{phone, name,  mail,gender,univ}=req.body;
     console.log(req.body);
     mysqlConnection.query('insert into user(phone,name,mail,gender,univ) values(?,?,?,?,?);',[
        phone, name,  mail,gender,univ
     ],(error,rows,fields)=>{
        if(!error)
        { 
            res.json({Status:'User Saved'});       
        }
        else
    {
          console.log(error);
    }

     });
 
});
router.put('/:users/:id',(req,res)=>{
    const{phone, name,  mail,gender,univ}=req.body;
    console.log(req.body);
    mysqlConnection.query('update user set name =?, mail=?,gender=?, univ = ?, where id=?;',[
         name,  mail,gender,univ,phone
     ],(error,rows,fields)=>{
        if(!error)
        {
            res.json({Status:'User Updated'});
        }
        else{
            console.log(error);
        }
     });
});

router.delete('/:user/:id',(req,res)=>{
    const {phone} = req.params;
    mysqlConnection.query('delete from user where id = ?;',[phone],(error,rows,fields)=>{
        if(!error)
        {
            res.json({Status:'User deleted'});

        }
        else{
            console.log(error);
        }
    });
});
module.exports=router;