const {Router}  = require('express');
const {mock} = require('mockjs');
const moment =require('moment');

const router = new Router();
router.get('/user',(req,res)=>{
    let {count} = req.query;
    

    setTimeout(function(){
        if(count<0){
            res.json(mock({
                code: 0 ,
                message:'ok',
                data:
                    {
                        'newUser|100-500':0,
                        'online|1000-5000':0,
                        'allUser|1000-50000':0,
                        'newTravels|100-500':0,
                    }
            }))
        }else{
            res.json({
                code:0,
                message:'ok',
                data:mockRangeUserData(count)
            })
        }
    },1000)
});

function mockRangeUserData(count){
    let newCount = Number(count);
    let data = [];

    for(let i = newCount ; i > 0 ; i--){
        
        data.push(mock({
            date:fun_date(-i),
            'newCount|100-500':0,
            'visitedCount|1000-100000':0,
            'newtravelCount|1000-20000':0
        }))
    }
    
    console.log(data);
    
    return data;     
}

function fun_date(aa){
    var date1 = new Date(),
    time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
    var date2 = new Date(date1);
    date2.setDate(date1.getDate()+aa);
    var time2 = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
    return time2
}


module.exports = router;