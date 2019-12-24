function mockRangeUserData(count){
    let newCount = Number(count);
    let data = [];

    for(let i = newCount ; i > 0 ; i--){
        console.log(i);
        
        data.push({
            date:fun_date(-i),
            'newCount|100-500':0,
            'visitedCount|1000-100000':0,
            'newtravelCount|1000-20000':0
        })
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
