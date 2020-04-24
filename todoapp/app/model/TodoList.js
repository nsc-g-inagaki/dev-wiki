//TODOリストを表す
class TodoList extends BaseList {

    constructor() {
        super();
    }

    addTodo(todo) {
        super.addTodo(todo);
    }

    //TODOをリストから削除する
    reomveItem(todo) {
        //TODOがリストのどのポジションにいるのかを探す
        let position = this._list.indexOf(todo); 

        //ポジションが0以上かどうかをチェック
        if(position >= 0) {
            //ポジションから1個データを削除
            this._list.splice(position, 1);
        }
    }
}
