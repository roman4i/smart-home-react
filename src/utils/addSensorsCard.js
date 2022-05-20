const insertSensorCard = (old, edited) => {
    let toNew = true;
    let toReturn;

    old.forEach(element => {
        if (element.name === edited.cardName) toNew = false;
    });

    if (toNew) {
        toReturn = [...old];
        toReturn.push({
            name:edited.cardName,
            val: [{
                name:edited.valName,
                val: edited.val,
            }]
        });
    } else {
        toReturn = old.map( element => {
            return( element.name === edited.cardName ? 
                    {...element, val: [...element.val,{name: edited.valName, val: edited.val}]} :
                     element )
        })
    }

    return toReturn;
}

export default insertSensorCard;