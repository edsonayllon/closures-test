// private methods

const { log } = console;

const counterFactory = () => {
    let privateCounter = 0;
    const changeBy = val => privateCounter += val
    return {
        increment: () => changeBy(1),
        decrement: () => changeBy(-1),
        value: () => privateCounter
    }
};

const logExec = (func, command) => {
    func[command]()
    log(`${command}: ${func.value()}`)
} 

const counterRun = () => {
    const [increment, decrement] = ['increment', 'decrement']

    log('First counter')
    const counter = counterFactory()
    logExec(counter, increment);
    logExec(counter, increment);
    logExec(counter, decrement);

    log('New counter memory')
    const counter2 = counterFactory()
    logExec(counter2, decrement);
    logExec(counter2, decrement);
    logExec(counter2, increment);
}

const main = () => {
    counterRun()
}

main()