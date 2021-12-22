import angular from "angular";

angular
    .module("app")
    .constant("relationGameRating", {
        "E": 0,
        "EC": 3,
        "E10+": 10,
        "T": 13,
        "M": 17,
        "AO": 18 
    })
    .constant("platforms", [
        "PC", "PS", "Xbox", "Nintendo Switch"
    ])