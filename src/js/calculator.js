recipeChiliGingerWings = [1, 1, 1, 0.5, 0.5, 1];
recipeCrossiant = [500, 50, 20, 1, 310];
recipeStickiestRips = [1.1, 2, 0.3, 2, 1, 1, 1];
recipeFriedSpringRolls = [20, 1, 80, 200, 250,  2, 1, 1.5, 1, 1, 1, 1, 3, 2, 3, 1, 2];
let factor;


//main function to detect which recipe-calculator was clicked
function detectValues(sort){
    
    resetValues();
   tempArray = [];
    if(sort == "crossiant"){
        factor = document.getElementById('number-portions-crossiants').value;
        recipeCrossiant = calculateRecipe(recipeCrossiant, factor);
        renderCrossiantsRecipe();
       
    }else if(sort== "chiliGingerWings"){
        factor = document.getElementById('number-portions-chiliGingerWings').value;
        recipeChiliGingerWings = calculateRecipe(recipeChiliGingerWings, factor);
        renderChiliGingerWingsRecipe();
    }else if(sort== "stickiestRips"){
        factor = document.getElementById('number-portions-stickiestRips').value;
        recipeStickiestRips = calculateRecipe(recipeStickiestRips, factor);
        renderStickiestRipsRecipe();

    }else if(sort=="friedSpringRolls"){
        factor = document.getElementById('number-portions-friedSpringRolls').value;
        recipeFriedSpringRolls = calculateRecipe(recipeFriedSpringRolls, factor);
        renderFriedSpringRollsRecipe();

    }


}


//function to calculate the given array 
function calculateRecipe(recipeArray, number){
    if(number >= 1 && number){   
        for (let index = 0; index < recipeArray.length; index++) {
            recipeArray[index] = Math.round((recipeArray[index]*number)*100)/100; 
        }
    }
   

    return recipeArray;

}

//function to reset the values in the arrays to 
function resetValues(){


recipeChiliGingerWings = [1, 1, 0.5, 0.5, 1];
recipeCrossiant = [500, 50, 20, 1, 310];
recipeStickiestRips = [1.2, 2, 0.3, 2, 1, 1, 1];
recipeFriedSpringRolls = [20, 1, 80, 200, 250,  2, 1, 1.5, 1, 1, 1, 1, 3, 2, 3, 2, 1, 2];

}


//function to render the content of the crossiant recipe
function renderCrossiantsRecipe(){
    let container = document.getElementById('crossiant-container');

    container.innerHTML = '';
    container.innerHTML = `            
    <p>${recipeCrossiant[0]}g Mehl</p>

    <p>${recipeCrossiant[1]}g Zucker</p>

    <p>${recipeCrossiant[2]}g frische Hefe</p>

    <p>${recipeCrossiant[3]} TL Salz</p>

    <p>${recipeCrossiant[4]}ml Wasser</p>`;

}

//function to render the content of the chili ginger wings recipe
function renderChiliGingerWingsRecipe(){
    let container = document.getElementById('chiliGingerWings-Containter');
    container.innerHTML='';
    container.innerHTML = `

    <p>${recipeChiliGingerWings[0]}kg Chicken Wing Drumettes</p>

    <p>${recipeChiliGingerWings[1]} EL Backpulver</p>

    <p>${recipeChiliGingerWings[2]} TL Meersalz</p>

    <p>${recipeChiliGingerWings[3]} Flasche Sticky Chilli & Ginger Asian Steakhouse Marinade</p>

    <p>${recipeChiliGingerWings[4]} TL weißer Sesam</p>

    <p>${recipeChiliGingerWings[5]} TL fein gehackte Frühlingszwiebeln (Frühlingszwiebeln)</p>
    `;

    
}


//function to render the content of the fried spring rolls recipe
function renderFriedSpringRollsRecipe(){
    let container = document.getElementById('friedSpringRolls-container');
    container.innerHTML = '';
    container.innerHTML = `
    <p>${recipeFriedSpringRolls[0]} diameter dried rice paper wrappers</p>
    <p>${recipeFriedSpringRolls[1]} tbsp sugar</p>
    <p>vegetable oil for deep frying</p>
    <p>lettuce leaves to serve</p>
    <p>mint leaves to serve</p>
    <p>${recipeFriedSpringRolls[2]} g dried glass noodles</p>
    <p>${recipeFriedSpringRolls[3]} g peeled, deveined and finely chopped prawns</p>
    <p>${recipeFriedSpringRolls[4]} g pork mince</p>
    <p>${recipeFriedSpringRolls[5]}  Asian shallots, finely chopped</p>
    <p>${recipeFriedSpringRolls[6]}  egg</p>
    <p>${recipeFriedSpringRolls[7]}  tbsp fish sauce</p>
    <p>${recipeFriedSpringRolls[8]} tsp fish sauce</p>
    <p>${recipeFriedSpringRolls[9]} tsp sugar</p>
    <p>${recipeFriedSpringRolls[10]} tsp ground white pepper</p>
    <p>${recipeFriedSpringRolls[11]} tsp sea salt</p>
    <p>${recipeFriedSpringRolls[12]} tbsp fish sauce</p>
    <p>${recipeFriedSpringRolls[13]} tbsp white vinegar</p>
    <p>${recipeFriedSpringRolls[14]} tbsp sugar</p>
    <p>${recipeFriedSpringRolls[15]} tbsp lime juice</p>
    <p>${recipeFriedSpringRolls[16]} long red chilli, finely chopped</p>
    <p>${recipeFriedSpringRolls[17]} garlic cloves, finely chopped</p>`;

}


//function to render the content of the stickiest rips recipe
function renderStickiestRipsRecipe(){
    let container = document.getElementById('stickiestRipsRecipe-container');
    container.innerHTML = '';
    container.innerHTML= `
    <p>${recipeStickiestRips[0]} kg Schweinerippchen-Rack</p>
    <p>${recipeStickiestRips[1]} EL Gochujang</p>
    <p>${recipeStickiestRips[2]} Tasse brauner Zucker</p>
    <p>${recipeStickiestRips[3]} EL Sojasauce</p>
    <p>${recipeStickiestRips[4]} TL Salz</p>
    <p>${recipeStickiestRips[5]} Tasse Ginger Beer, Root Beer oder Ihr Lieblingssprudelgetränk</p>
    <p>${recipeStickiestRips[6]} EL Apfelessig</p>
    <p>dünn geschnittene Frühlingszwiebeln/Koriander (Frühlingszwiebeln/Koriander), zum Servieren</p>
   
    `;

}



