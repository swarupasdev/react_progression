import { useEffect, useState } from "react";

import { messages } from "../engine/messages";


export default function useGameEngine(){

    const [points,setPoints] = useState(1);

    const [message,setMessage] = useState(
        messages[0]
    );

    const [danger,setDanger] = useState(false);



    useEffect(()=>{


        const rewardTimer = setInterval(()=>{

            setPoints(previous => previous + 1);

        },1000);



        const messageTimer = setInterval(()=>{

            const index = Math.floor(
                Math.random() * messages.length
            );


            setMessage(
                messages[index]
            );


        },3000);




        const dangerTimer = setInterval(()=>{


            const risk =
                Math.random() > 0.7;


            setDanger(risk);



        },2000);





        return ()=>{

            clearInterval(rewardTimer);

            clearInterval(messageTimer);

            clearInterval(dangerTimer);

        };


    },[]);




    function claimReward(){


        if(danger){


            alert(
                "You lost everything."
            );


            setPoints(1);


            return;

        }



        alert(
            `You earned ${points} points`
        );


        setPoints(1);

    }





    return {

        points,

        message,

        danger,

        claimReward

    };

}

//createElement = creates tags inside <></>
//.innerText =access text values inside 
//.value = inputs value inside
//.appendChild = paste whatever changes u r making under whatever id to dom 
//class.Toggle()= used to hide if class exist and unhide if doesnt 
//style.display='none' hide
//style.display="flex" show 