(function () {
    function hoverState() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css("background-color", "#eee");
                    $element.css("border-radius", "3px");
                    $element.children().css("color", "#ff0000");
                });
                $element.on("mouseout", function() {
                    $element.css("background-color", "white");
                    $element.children().css("color", "black");

                });

            }
        };

    }



    angular.module("app")
        .directive("hoverState", hoverState);
})();