const hq = 42;

function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - hq);
}


function distanceFromHqInFeet(pickup){
    let stuff = distanceFromHqInBlocks(pickup);

    return stuff * 264;

}

function distanceTravelledInFeet(start, destination){
    let feet;
    if (start > destination){
        feet = (start-destination)*264;
        return feet;
    }
    else{
        feet = (destination - start)*264;
        return feet;
    }
}

function calculatesFarePrice(start, destination){
    let travel = distanceTravelledInFeet(start, destination);

    if (travel <=400 ) {
        return 0;
    }
    else if (travel > 400 && travel < 2000) {  
        return 2.56;   
    }
    else if (travel > 2000 && travel < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
