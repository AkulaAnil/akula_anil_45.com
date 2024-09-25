var listItems = document.querySelectorAll(".nav_list .nav_list_li");

listItems.forEach(function(item) {
    item.addEventListener("click", function() {
        document.getElementById("check").checked = false;
    });
});


