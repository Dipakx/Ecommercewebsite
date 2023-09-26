/* this will reload the website after resizing every time */

window.addEventListener("resize", function () {
    window.location.reload();
})

/* this will reload the website after resizing every time */

/* this will set the size / width of the website acroding to screen / window of the width*/

if (window.innerWidth >= 800) {
    var width_of_the_screen = Math.max(screen.width, window.innerWidth);
} else {
    var width_of_the_screen = Math.min(screen.width, window.innerWidth);
}

/* this will set the size / width of the website acroding to screen / window of the width*/

/* this will set the size / width of the header acroding to screen / window of the width*/

document.getElementById("header").style.width = width_of_the_screen + "px";

/* this will set the size / width of the header acroding to screen / window of the width*/

/* code for logo*/

document.getElementById("ghj").style.height = width_of_the_screen * 100 / 1536 + "px";
document.getElementById("ghj").style.width = width_of_the_screen * 200 / 1536 + "px";
document.getElementById("logo").style.height = width_of_the_screen * 70 / 1536 + "px";

/* code for logo*/

/* code for li itms in heder*/

document.getElementById("navbar-1").style.fontSize = width_of_the_screen * 20 / 1536 + "px";
var list_items = document.getElementsByTagName("li")
for (let index = 0; index < list_items.length; index++) {
    list_items[index].style.marginRight = width_of_the_screen * 40 / 1536 + "px";
}

/* code for li itms in heder*/

if (width_of_the_screen <= 768) {

    /* to set padding of the header to looks good*/

    document.getElementById("header").style.paddingBottom = width_of_the_screen * 50 / 1536 + "px";
    document.getElementById("header").style.paddingTop = width_of_the_screen * 50 / 1536 + "px";

    /* to set padding of the header to looks good*/

    /* to hidde the li itmes in small device*/

    var list_items = document.getElementsByTagName("li")
    for (let index = 0; index < list_items.length; index++) {
        list_items[index].style.display = "none";
    }

    /* to hidde the li itmes in small device*/

    /* to set icons in small device*/

    document.getElementById("mobile").style.display = "flex";
    document.getElementById("mobile").style.marginRight = width_of_the_screen * 20 / 1536 + "px";
    document.getElementById("bar").style.marginLeft = width_of_the_screen * 20 / 1536 + "px";

    /* to set icons in small device*/

    /* to set the styling of the li itmes in the small device*/

    document.getElementById("bar").addEventListener("click", function () {

        /* to set the li items in small device*/

        document.getElementById("mobile").style.display = "none";

        for (let index = 0; index < list_items.length; index++) {
            list_items[index].style.display = "flex";
            list_items[index].style.marginBottom = width_of_the_screen * 20 / 1536 + "px";
            list_items[index].style.marginTop = width_of_the_screen * 20 / 1536 + "px";
            list_items[index].style.marginLeft = width_of_the_screen * 30 / 1536 + "px";
        }

        /* to set the li items in small device*/

        /* to set the li items in small device*/

        var navbar = document.getElementById("navbar-1").style;

        navbar.display = "flex";
        navbar.alignItems = "flex-start";
        navbar.flexDirection = "column";
        navbar.position = "fixed";
        navbar.top = "0px";
        navbar.right = "0px";
        navbar.height = "100vh";
        navbar.width = width_of_the_screen * 350 / 1536 + "px";
        navbar.backgroundColor = "whitesmoke";
        navbar.fontSize = width_of_the_screen / 30 + "px";

        /* to set the li items in small device*/
    })

}

/* to set the styling of the li itmes in the small device*/