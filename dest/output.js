/**
 * This will create the angular module.
 */
(function () {
    angular.module("idealapp", []);
})();

var IdealApp;
(function (IdealApp) {
    var Components;
    (function (Components) {
        var NewsItemControler = (function () {
            function NewsItemControler() {
            }
            NewsItemControler.prototype.$onInit = function () {
                this.name = "chan";
            };
            return NewsItemControler;
        }());
        Components.NewsItemControler = NewsItemControler;
        Components.NewsItemComponent = {
            controller: NewsItemControler,
            templateUrl: '/app/news-item.html',
            controllerAs: 'vm'
        };
    })(Components = IdealApp.Components || (IdealApp.Components = {}));
})(IdealApp || (IdealApp = {}));

(function () {
    angular.module("idealapp").component("newsItem", IdealApp.Components.NewsItemComponent);
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiLCJhcHAuY29tcG9uZW50LnRzIiwiYXBwLmluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxDQUFDO0lBRUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFbkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7QUNQTCxJQUFPLFFBQVEsQ0FjZDtBQWRELFdBQU8sUUFBUTtJQUFDLElBQUEsVUFBVSxDQWN6QjtJQWRlLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFDeEI7WUFBQTtZQUtBLENBQUM7WUFIRyxtQ0FBTyxHQUFQO2dCQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7WUFDTCx3QkFBQztRQUFELENBTEEsQUFLQyxJQUFBO1FBTFksNEJBQWlCLG9CQUs3QixDQUFBO1FBRU8sNEJBQWlCLEdBQUc7WUFDOUIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixXQUFXLEVBQUUscUJBQXFCO1lBQzVCLFlBQVksRUFBRSxJQUFJO1NBQ3hCLENBQUM7SUFFSCxDQUFDLEVBZGUsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFjekI7QUFBRCxDQUFDLEVBZE0sUUFBUSxLQUFSLFFBQVEsUUFjZDs7QUNkRCxDQUFDO0lBQ0csT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUM1RixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6Im91dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIHdpbGwgY3JlYXRlIHRoZSBhbmd1bGFyIG1vZHVsZS5cclxuICovXHJcbigoKT0+IHtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImlkZWFsYXBwXCIsIFtdKTtcclxuXHJcbn0pKCk7IiwibW9kdWxlIElkZWFsQXBwLkNvbXBvbmVudHMge1xyXG4gICAgZXhwb3J0IGNsYXNzIE5ld3NJdGVtQ29udHJvbGVyIHtcclxuICAgICAgICBuYW1lOnN0cmluZztcclxuICAgICAgICAkb25Jbml0KCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBcImNoYW5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdGV4cG9ydCBsZXQgTmV3c0l0ZW1Db21wb25lbnQgPSB7XHJcblx0XHRjb250cm9sbGVyOiBOZXdzSXRlbUNvbnRyb2xlcixcclxuXHRcdHRlbXBsYXRlVXJsOiAnL2FwcC9uZXdzLWl0ZW0uaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcblx0fTtcclxuXHRcclxufVxyXG5cclxuIiwiKCgpPT4ge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJpZGVhbGFwcFwiKS5jb21wb25lbnQoXCJuZXdzSXRlbVwiLCBJZGVhbEFwcC5Db21wb25lbnRzLk5ld3NJdGVtQ29tcG9uZW50KTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
