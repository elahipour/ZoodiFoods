
function filterByCookingTime(foods,time){
    if(!time){
        return foods;
    }
const filtered=foods.filter(food=>{
    const stringTime=Object.values(food.details[4]).join('');
    return time==='lessthan30'?getTime(stringTime)<=30:getTime(stringTime)>30;  
})
return filtered;
}
function getTime(fullString){
    
    const splitted=fullString.split(" ");
    return +splitted[0];
}
export default filterByCookingTime