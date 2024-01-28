const readline = require("readline").createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)


function Car(){
    let driverName = null
    let driverInstruction = null
    readline.question("give your name: ", (name)=>{
        driverName=name;
        const CAR_OPTIONS = {
            park:"parked",
            moveForward:"moving forward",
            moveBackward:"moving backward",
            start:"started"
        }
        readline.question("your instruction: ", (instruction)=>{
            driverInstruction = instruction
            if(driverName){
                if(driverInstruction.trim() in CAR_OPTIONS){
                    console.log(`the car ${CAR_OPTIONS[driverInstruction] == "parked" ? 'has' : "is"} ${CAR_OPTIONS[driverInstruction]}`)
                    readline.close()
                }
                else{
                        console.log("The car does not recognize the instruction you gave")
                        readline.close()
                    }
            }
            else{
                console.log("No driver to operate the car")
                readline.close()
            }
        })
    })
    // readline.question("your instruction? ", (instruction)=>{driverInstruction=instruction; readline.close()})
}

Car()