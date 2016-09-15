class NewsItemControler {
    name: string;
    $onInit() {
        this.name = "chan";
    }
}

let NewsItemComponent = {
    controller: NewsItemControler,
    templateUrl: '/app/news-item.html',
    controllerAs: 'vm'
};

export { NewsItemComponent};
