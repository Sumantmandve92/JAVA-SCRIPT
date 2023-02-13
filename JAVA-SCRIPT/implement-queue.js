const people=["A","B","C","D"];
function add(person)
{
people.push(person);//add at the end of queue
}
function remove()
{
    people.shift();// remove first person
}

add("E");
remove();