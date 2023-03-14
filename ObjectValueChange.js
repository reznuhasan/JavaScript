let woodPer={
    chair:3,
    table:10,
    bed:50
}

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
       let total=(woodPer.chair*chairQuantity)+(woodPer.table*tableQuantity)+((woodPer.bed*bedQuantity));
       return total;
}
let result=woodCalculator(1,0,0);
console.log(result);
