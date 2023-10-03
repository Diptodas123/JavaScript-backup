//sort()    --> sorts an array alphabetically
let n=["c","b","z"];
n.sort();   //-->sorts the original array
console.log(n);

//sort() in numerical values
n=[77,2,16,1];  //treats as string values
n.sort();
console.log(n);

//to sort numerical values, we need to pass a compare function as argument
const compare=(a,b)=>{
    //for ascending order return (a-b)
    return a-b;     //if it rertuns +ve num then b should be placed before a else if it returns -ve num then a should be placed before b

    //for descending order return (b-a)
    //return b-a;     //if rertuns + num then a is sorted before b else if returns - num then b is sorted before a
}
n.sort(compare);
console.log(n);

//reverse() --> reverses the content of an array
n=[2,3,10,0,1];
n.reverse() //-->modifies the original array
console.log(n);

//splice(startIndex,noOfItemsToDelete,...elementsToInsert)  -->used to add items to an array. Returns the deleted items after modifying the original array
n=[1,2,3,4,5];
let deletedItems=n.splice(2,1,23,24);
console.log("deletedItems= "+deletedItems);
console.log(n); 

n=["Orange","Mango","Banana","Papaya","Guava","Apple"];
deletedItems=n.splice(2,2,"Jackfruit","Date");
console.log("deletedItems= ",deletedItems);
console.log(n); 

//slice(startIndex,endIndex[optional])   -->similar to slice() method of string, slices to startIndex to (endIndex-1) and returns the sliced new array
console.log(n.slice(2));    //if 2nd parameter is omitted then slices from startIndex till the end
console.log(n.slice(2,4));  //slices elements from 2 to 3