const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3",
    key4:"value4"
}
const newObject={
    ...obj1,...obj2
}
console.log(newObject)