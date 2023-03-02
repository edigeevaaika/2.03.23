const exampleList = ["apple", "pears", "orange"];
for( let i =0; i < exampleList.length; i ++) {
  const element = list [i]
}
const result = [];
const exampleLiArray= document.querySelectorAll("#example1 li");
for( let i =0; i < exampleLiArray.length; i ++) {
  result.push(exampleLiArray[i].textContent);
}
console.log(result);


const ul1 = document.createElement("ul");
document.body.append(ul1);
for (i = 0; i < exampleList2.length; i++) {
  const list1 = document.createElement("li");
  ul1.append(list1);
  list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}

