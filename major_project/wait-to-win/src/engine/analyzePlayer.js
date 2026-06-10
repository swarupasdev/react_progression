export default function analyzePlayer(waitTime){


    if(waitTime < 5){

        return "Impulsive";

    }


    if(waitTime < 15){

        return "Balanced";

    }


    return "Patient";

}