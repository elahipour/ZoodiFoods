function filterByDifficultyLevel(foods,difficulty){
        if(!difficulty){
                return foods;
            }
        const filtered=foods.filter(food=>{
           return difficulty?.toLowerCase()===(Object.values(food.details[2]).join()).toLowerCase();
            })
            
            return filtered;
        

}

export default filterByDifficultyLevel