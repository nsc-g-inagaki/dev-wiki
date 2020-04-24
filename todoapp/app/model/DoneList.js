//完了したTODOを持っておくリストクラス
class DoneList extends BaseList {

    constructor() {
        //BaseListのコンストラクターを呼び出す
        super();
    }

    //TODOを追加する
    addTodo(todo) {
        //追加する前にTODOが完了していることをチェック
        if(todo.isDone()) {
            super.addTodo(todo);
        }
    }

}