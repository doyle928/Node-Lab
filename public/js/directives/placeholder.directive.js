(function () {
    function placeHolder() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mousedown", function () {
                    var test = $element.parent();
                    console.log(test[0].innerHTML.split(/\s\s+/)[0]);
                    $("#editInput").attr("placeholder", test[0].innerHTML.split(/\s\s+/)[0])
                });

            }
        };

    }



    angular.module("app")
        .directive("placeHolder", placeHolder);
})();