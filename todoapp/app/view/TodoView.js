class TodoView extends BaseView {

    constructor(element) {
        super(element);
    }

    template(todo) {
        return `<li class="ui-state-default">
            <div class="checkbox">
            <label>
                <input type="checkbox" value="" />${todo.name}</label>
            </div>
        </li>`
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