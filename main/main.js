// Write your cade below:
//系统给出的数字为1234，进行两个测试，用户输入:1234和4321
function main(str) {
    //let Num = getNumb();
    let Num ='1234';
    console.log('your inputs : '+str);
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
    return result;
}
module.exports =main;

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