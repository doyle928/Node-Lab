(function () {
    function hoverLinks() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css("color", "#ff1493");
                });
                $element.on("mouseout", function() {
                    $element.css("color", "#ff69b4");
                });

            }
        };

    }



    angular.module("app")
        .directive("hoverLinks", hoverLinks);
})();