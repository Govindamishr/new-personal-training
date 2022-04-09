function missing (arr){
    let missArray =[]
    let minNum=math.min(...arr);
    let maxNum=math.max(...arr);

for (let i=minNum; i<maxNum;i++){
    if (arr.indexof(i)<0){
        missArray.push(i);

    }

return missArray
}

console.log(missing([1,2,3,4,5,7,8,9]))