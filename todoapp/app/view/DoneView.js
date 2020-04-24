class DoneView extends BaseView {

    constructor(element) {
        super(element);
    }

    template(todo) {
        return `<li>Some item <button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button></li>
        `
    }

    update(todoList) {
        //todoListのアイテム1個ごとにtemplateでHTMLを作成
        let content = '';

        todoList.forEach(todo => {
            content += this.template(todo);
        });

        //elementのinnerHTMLに入れる
        this._element.innerHTML = content;
    }
}