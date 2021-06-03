function newItem() {

    //add item to list
    let li = $('<li></li');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }
    
    //crosses item out
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick" , function crossOut() {
        li.toggleClass("strike");
    });

    //added delete button
    let crossOutButton = $('<crossOutButton></crossOutButton')
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click" , deleteListItem);
    function deleteListItem() {
        li.addClass("delete")
    }

    //change order of items
    $('#list').sortable();
}