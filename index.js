// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation)
{
let numberOfBlocks=pickUpLocation-42;
if(numberOfBlocks<0)
{
    numberOfBlocks=numberOfBlocks*-1
    return numberOfBlocks;
}
return numberOfBlocks;
}

function distanceFromHqInFeet(pickUpLocation)
{
    let distanceInFeet=distanceFromHqInBlocks(pickUpLocation);
    distanceInFeet=distanceInFeet*264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start,destination)
{

    let distanceTravelledFeet=start-destination;
    if(distanceTravelledFeet>0)
    {
        return distanceTravelledFeet*264;
    }
    else
    {
        return (distanceTravelledFeet*-1) * 264;
    }
}

function calculatesFarePrice(start, destination)
{
    let totalDistanceNeedsToTravel= distanceTravelledInFeet(start,destination);
    
    let fare;

    if (totalDistanceNeedsToTravel<=400)
    {
        fare=0;
        return fare;
    }
    else if(totalDistanceNeedsToTravel>400 && totalDistanceNeedsToTravel<2000)
    {
        let centsPerfoot=totalDistanceNeedsToTravel-400
        fare=(2*centsPerfoot)/100;
        return fare;
        
    }
    else if(totalDistanceNeedsToTravel>2000 && totalDistanceNeedsToTravel<=2500)
    {
        fare=25;
        return fare;
    }
    else if(totalDistanceNeedsToTravel>2500)
    {
        return 'cannot travel that far' ;
    }
}