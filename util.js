const names_list = ['Lance','Jeff', 'John', 'Shay', 'Mary', 'Jake', 'Louie', 'Mark', 'Sam', 'Maddy']

/**
 * Changes the h1 element with an id of name_text to a random name from an inputted list
 * @param list_of_names List of names to generate a random one from
 */
function RandomName(list_of_names){
    let random_name =  list_of_names[Math.floor(Math.random() * list_of_names.length)];

    document.getElementById("name_text").innerHTML = random_name;
}