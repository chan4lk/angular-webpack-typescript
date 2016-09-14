module IdealApp.Components {
    export class NewsItemControler {
        name:string;
        $onInit() {
            this.name = "chan";
        }
    }

	export let NewsItemComponent = {
		controller: NewsItemControler,
		templateUrl: '/app/news-item.html',
        controllerAs: 'vm'
	};
	
}

