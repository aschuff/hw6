var user = prompt("You are walking through the forest when you find a lamp. After rubbing the lamp, a Genie appears. He gives you 3 choices. What do you ask for - A SPELL, MONEY, or to TRAVEL?");
switch(user){
    case 'spell':
        var love = prompt("A love spell? YES or NO?").toLowerCase();
          if(love === 'yes') {
            console.log("Use this new found gift wisely.");
        } else {
           console.log("High expectations, huh? Find another Genie.");
         }
        break;

    case 'money':
        var dollars = prompt("How much are you asking for?").toLowerCase();
          if(dollars <= 1000000000 || '1 billion'|| '$1000000000') {
            console.log("Go spend that $$$!");
          } else {
            console.log("Oooh the Genie doesn't have THAT much. Try again!");
          }
        break;

    case 'travel':
      var destination = prompt("Where will you go? Europe - YES or NO?").toLowerCase();
        if (destination === 'yes') {
          console.log("Have fun and thank the genie!");
        } else {
          console.log ("Way to think outside the box. Have fun!");
        }
        break;
    default:
        console.log("That's not a choice. Try again.");
}
