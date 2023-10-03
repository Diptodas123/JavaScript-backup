let marks={
    "Dipto":94,
    "Shreyan":80,
    "Meenakshi":85,
    "Sidhhant":70
};
// console.log(Object.keys(marks));        //returns the keys of marks obj
// console.log(Object.values(marks));      //returns the values of marks obj

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+Object.keys(marks)[i] + " is "+Object.values(marks)[i])
}

