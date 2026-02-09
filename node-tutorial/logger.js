

function log(message){
    console.log(message);
}

function greet(name){
    console.log(`Hello! ${name ?? "Guest"}`)
}

module.exports = {
    log,
    greet
};
