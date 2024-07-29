const people = [
    { name: 'alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' },
    { name: 'David', age: 30, city: 'New York' },
    { name: 'Eve', age: 25, city: 'Los Angeles' },
];

//for each
//Q1
people.forEach(person => {
    console.log(person.name.toUpperCase())
});
console.log("\n\n\n\n\n")
//Q2
people.forEach(person => {
    console.log(person.age + 5)
});
console.log("\n\n\n\n\n");
//Q3
people.forEach(person => {
    console.log(person.city)
});
console.log("\n\n\n\n\n");

//find 
// Q1

const minAge = Math.min(...people.map(person => person.age));
const youngPersons = people.find(person => person.age === minAge);
console.log(youngPersons);

//Q2
const personName = people.find(person => person.name === 'Charlie');
console.log(personName);
//Q3
const personCity = people.find(city => city.city === 'Chicago');
console.log(personCity);
console.log("\n\n\n\n\n\n")
//filter
// Q1
const greaterAge = people.filter(age => age.age >= 30);
console.log(greaterAge);


// Q2
const fromCity = people.filter(city => city.city === 'New York');
console.log(fromCity);

//Q3
const longCharater = people.filter(name => name.name.length >= 4);
console.log(longCharater);
console.log("\n\n\n\n\n\n");
//map
// Q1
const arrOfAge = people.map(age => age.age);
console.log(arrOfAge);
// Q2
const discription = people.map(decrip => {
    return ` hello i'm  ${decrip.name} , my age is ${decrip.age} and iam living in ${decrip.city}`;
});
console.log(discription);

//Q3
const emailAddress = people.map(emailAd => {
    return `${emailAd.name}${emailAd.age}@gmail.com`;
});
console.log(emailAddress);

console.log("\n\n\n\n\n\n")
//reduce

// Q1

const result=people.reduce((total, item)=>{
    return total + item.age ;
},0);
console.log(result);


//Q2

const cityC=people.reduce((total1,person)=>{
    if(!total1[person.city]){
        total1[person.city]=1;
    }else{
        total1[person.city]++;
    }
    return total1
},{});
console.log(cityC);

//Q3

const concatNme=people.reduce((itemm,person1)=>{
    return itemm + person1.name;
},'');
console.log(concatNme)