(function () {
    function hoverButton() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css("background-color", "#ff1493");
                });
                $element.on("mouseout", function() {
                    $element.css("background-color", "#ff69b4");
                });

            }
        };

    }



    angular.module("app")
        .directive("hoverButton", hoverButton);
})();