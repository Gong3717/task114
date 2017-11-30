// 直接运行该程序，可在控制台输入用户猜的数字，并输出相应的成绩
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
   console.log('请输入四位不重复的数字');
   rl.question("Gess number：",function(answer){
        let result = main(answer);
        rl.close();
    });
   rl.on("close", function(){
        // 结束程序
        process.exit(0);
    });

function main(str) {
   let Num =getNumb();
  // let Num = '1234';
  // console.log('your inputs : '+str);
   var count_A=0;
   var count_B=0;
   console.log('System inputs : '+Num);
    for(let i=0;i<str.length;i++){
        for(let j=0;j<Num.length;j++){
            if(str.charAt(i)===Num.charAt(j)){
                if(i===j){
                    count_A++;
                }else{count_B++;}
            }
        }
    }
    let result='' + count_A + 'A' + '' + count_B + 'B';
    console.log('your scores : '+result);
}


//随机获取4个不重复的数字
function getNumb(){
    var num = new Array();
    for(var i = 0; i < 4; i++){
        var val =  Math.floor(Math.random() * 10);
        var isEqu = false;
        for(var idx in num){
            if(num[idx] == val){isEqu = true; break;}
        }
        if(isEqu)
            i--;
        else
            num[num.length] = val;
    }
    let Num='';
    num.forEach(function (item){
        Num+=item;
    });
    return Num;
}