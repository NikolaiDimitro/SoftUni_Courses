function trekkingMania (input){

    let countGroupe = Number (input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let groups = 0;
    
    for (let i = 1; i <= input.length - 1; i++){

        groups = Number (input[i]);
        totalPeople += groups;

        if (groups <= 5){

            musala += groups; 

        }else if (groups <= 12){

            monblan += groups;

        }else if (groups <= 25){

            kilimandjaro += groups; 

        }else if (groups <= 40){

            k2 += groups;

        }else if (groups > 40){

            everest += groups;

        }
    }

    p1 = (musala / totalPeople) * 100;
    p2 = (monblan / totalPeople) * 100;
    p3 = (kilimandjaro / totalPeople) * 100;
    p4 = (k2 / totalPeople) * 100; 
    p5 = (everest / totalPeople) * 100;

            console.log(`${p1.toFixed(2)}%`);
            console.log(`${p2.toFixed(2)}%`);
            console.log(`${p3.toFixed(2)}%`);
            console.log(`${p4.toFixed(2)}%`);
            console.log(`${p5.toFixed(2)}%`);

}
trekkingMania(["10","10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);