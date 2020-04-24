//TodoList、DoneListのベースとなるクラス
class BaseList {

    constructor() {
        //TODOのリストを保持するための変数
        this._list = [];
    }

    get list() {
        return this._list;
    }


    //アイテムを追加する
    //パラメータで渡されたTodoをリストの最後に追加する
    addTodo(todo){
        console.log('addtodo');
        this._list.push(todo);
    }

    //リストを空にするメソッド
    clearList() {
        this._list = [];
    }
}