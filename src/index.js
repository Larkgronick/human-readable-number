module.exports = function toReadable (number) {
    let decimals =['zero','one','two','three','four','five','six','seven','eight','nine'];
    let tenths = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen', 'nineteen'];
    let tenthsZeros = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let centuplicate = 'hundred'
    let convert = [];
    let arr = number.toString(10).split("").map((item)=> parseInt(item));
    arr.forEach(function (item) {
        if(arr.length==3){
            convert.push(decimals[item]);
            convert.push(centuplicate);
            arr.splice(0,1);
        }
        number = number/100-(Math.floor(number/100));
        number = Math.round(number*100);  
    });
    arr.forEach(function (item,index) {
        if(arr.length==2 && number==0){
            arr.splice(0,2);
        }
        if(arr.length==2 && number<10){
            convert.push(decimals[arr[index+1]]);
            arr.splice(0,2);
        }
        if(arr.length==2 && number>=10 && number<20){
            convert.push(tenths[arr[index+1]]);
            arr.splice(0,2);
        }
        if(arr.length==2 && number>=20 && number<100 && number%10==0){
            convert.push(tenthsZeros[item-2]);
            arr.splice(0,2);
        }
        if(arr.length==2 && number>=20 && number<100 && index==0){
            convert.push(tenthsZeros[item-2]);
            arr.splice(0,1);
        }
        number = number/10-(Math.floor(number/10));
        number = Math.round(number*10);
    });
    arr.forEach(function (item) {
        if(arr.length==1){
            convert.push(decimals[item]);
        }
    });     
    return convert.join(' ');
    
}
