console.log(längd)
// console.log(ålder)
// console.log(födelseår)
{
    let ålder = 18
    var längd = 179
    const födelseår = "1993"

    console.log(födelseår)
    console.log(längd)
    console.log(ålder)
}
// console.log(längd)
// console.log(ålder)
// console.log(födelseår)

console.log('5' == 5)
console.log('9' === 9)
console.log(NaN === NaN)
console.log(null == undefined)
console.log(null === undefined)


/* Reflektion Uppgift 2

     1. Samtliga variabler fungerar att skriva ut med 
     console.log() inom blocket.
     Variabeln var skrivs ut som undefined vid utskrift
     innan blocket, men går att skriva ut som vanligt efter blocket.
     Både let och const ger felmeddelande att variabeln inte är 
     definierad vid utskriftsförsök utanför blocket.
     
     2. Alla tre variabler indikerar att dess innehåll inte är
     definierat vid utskrift innan kodblocket även om var inte gör det 
     i form utav ett felmeddelande vilket känns rimligt.
     Inom kodblocket fungerar alla tre variablerna som förväntat.
     Efter kodblocket så fortsätter däremot var att fungera medans
     let och const inte gör det. Variablerna bör med fördel endast 
     användas inom deras "scope" vilket förklarar varför vi fått
     lära oss att inte använda var överhuvudtaget.  */

console.log('5' == 5)
console.log('9' === 9)
console.log(NaN === NaN)
console.log(null == undefined)
console.log(null === undefined)

console.log(undefined ? true : false)

// Utför samma operation med en if-sats

    if (undefined === true) {
        console.log("truthy")
    }   
    else {
        console.log("falsy")
    }

/* Reflektion Uppgift 3

    1. Skillnaden på de tvä jämförelserna == & === är att den förstnämnda,
    == operatorn inte är lika strikt utan tillåter typkonverteringar.
    === operatorn är däremot mer strikt och kräver att de två operanderna
    är utav samma datatyp. 
    
    console.log('5' == 5) blir därför true trots att ena operanden är en
    sträng och den andra ett heltal.

    console.log('9' === 9) blir således false eftersom de inte är av samma 
    datatyp.

    console.log(NaN === NaN) NaN är ett speciallfall som inte riktigt går 
    förklara varför det blir false.

    console.log(null == undefined) är true, de två värdena behandlas som lika.

    console.log(null === undefined) blir false vid strikt jämföring då det är
    olika datatyper.

    2. Uttrycket jämförs för att avgöra om det är sant eller falskt och
    beroende på resultatet så skrivs det ut i konsolen.

    3. NaN - Not-A-Number returneras vid t.ex matematiska operationer som inte              **
    ger ett numeriskt värde. 

    undefined - Om en variabel inte har tilldelats ett värde är av typen
    undefined. En metod returnerar också undefined om variabeln inuti inte
    har tilldelats ett värde och en funktion returnerar undefined om ett
    värde inte returnerades. 

    null - representerar den avsiktliga frånvaron av något objektvärde.
    Till skillnad från undefined som är en global variabel, så är null
    inte en identifierare utan ett syntaxnyckelord.

    */
console.log(greet("Johan"))
// Skapar funktionen greet med parametern name.
function greet(name)    {
    return console.log("Hej "+name)
}

// Skriver ut resultatet genom funktionsanropet direkt i console.log().
console.log(greet("Kennedy"))

// Skapar variabeln name och skriver ut den med console.log().
let name ="Ulrik";
console.log(name)

/* Reflektion Uppgift 4

    1. Funktionsdeklaration - En funktionsdeklaration består av två delar: 
    * Deklarationen: funktionens namn, returtyp och eventuella parametrar.
    * Definitionen: funktionens innehåll (koden som exekveras).
    
    Funktionsuttryck - Den stora skillnaden mellan ett funktionsuttryck och 
    en funktionsdeklaration är funktionsnamnet som kan utelämnas i 
    funktionsuttryck för att skapa anonyma funktioner.

    Arrowfunktion - Är ett kompakt alternativ till funktionsuttryck. 
    Genom att ersätta ordet "function" med "=>", samt ta bort
    måsvingarna {} och "return" i funktionen likvärdig funktion
    med mindre kod.

    Jag valde funktionsuttryck då det helt enkelt var den varianten
    jag kände mig tryggast med att använda utifrån tidigare erfarenheter.

    2. Funktionen greet kan anropas innan den skapats och returnerar då undefined 
    på raden den skrivs ut på samt korrekt innehåll på raden där själva 
    funktionen deklareras.

    3. Om jag ändrar parametern inuti funktionen greet() utan att ändra
    vid funktionsdeklarationen eller vise värsa så får jag ett felmeddelande
    då parameternamnen inte matchar varandra.
    Ändrar jag variabelnamnet name och försöker skriva ut console.log(name)
    så får jag ingen utskrift men name blir överstruket i script.js-filen
    och menar på att variabeln är föråldrad "deprecated". 
    Ändrar jag innehållet i console.log() istället så får jag ett felmeddelande
    som hänvisar till att innehållet inte är definierat.                                        **

    4.  
    
    Parameter - Används i funktionsdefinitionen för att referera till
    argumenten, fungerar endast inom funktionen.

    Argument - Värden som skickas som indata till en funktion.

    Variabel - En namngiven referens till ett värde, något som kan variera
    och fungerar så snart den deklarerats.

    */
   