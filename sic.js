function navigateTo(inpTabToShow) {
    //
    $(".mainTabSections").removeClass("show").removeClass("active");
    $(".nav-item").removeClass("active");
    if (inpTabToShow == 'tabHome') {
        $("#tabHome").addClass("show").addClass("active");
        $("#navToHome").closest("li").addClass("active");
    }
    else if (inpTabToShow == 'tabCruises') {
        $("#tabCruises").addClass("show").addClass("active");
        $("#navToCruises").closest("li").addClass("active");
    }
    else if (inpTabToShow == 'tabRentals') {
        $("#tabRentals").addClass("show").addClass("active");
        $("#navToRentals").closest("li").addClass("active");
    }
    else if (inpTabToShow == 'tabFood') {
        $("#tabFood").addClass("show").addClass("active");
        $("#navToFood").closest("li").addClass("active");
    }
    else if (inpTabToShow == 'tabThingsToSee') {
        $("#tabThingsToSee").addClass("show").addClass("active");
        $("#navToThingsToSee").closest("li").addClass("active");
    }
    
    else if (inpTabToShow == 'tabAccomodation') {
        $("#tabAccomodation").addClass("show").addClass("active");
        $("#navToAccomodation").closest("li").addClass("active");
    }
}