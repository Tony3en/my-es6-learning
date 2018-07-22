var obj={
    username :'shen.guoxiang',
}
obj = JSON.stringify(obj);
console.log(`${typeof obj}....${obj}`);
obj = JSON.parse(obj);
console.log(`${typeof obj}....${obj}`);
