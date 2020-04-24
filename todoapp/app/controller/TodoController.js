//アプリのコントロールをするクラス
class TodoController {

    constructor() {

        //document.querySelectorの仮名を作る　
        let selector = document.querySelector.bind(document);

        //画面のインプットを呼び出してくる
        this.inputTodo = selector('.add-todo');

        //画面のインプットにキーボードが押されたことを監視する。
        this.inputTodo.addEventListener('keypress', function (event) {
            event.preventDefault;

            //押されたキーがEnterかどうかをチェック
            if (event.key.toLowerCase() == 'enter') {

                //インプットの値が空ではないことをチェック
                if (event.target.value != '') {
                    console.log(event.target.value);
                    //TODOを追加するを呼び出す。
                    this.addTodo(event.target.value);

                }
            }

        }.bind(this));

        this._todoList = new TodoList();
        this._doneList = new DoneList();
        this._todoView = new TodoView(selector('#sortable'));
    }

    //TODO を追加する
    addTodo(inputValue) {

        //inputValueを使ってTodoオブジェクトを作成
        let todo = new Todo(inputValue);

        //作成したTodoオブジェクトを_todoListに追加
        this._todoList.addTodo(todo);

        //画面にリストを表示
        this._todoView.update(this._todoList.list);

        //インプットに入力されているものを消す。
        this.inputTodo.value = '';

    }

    //TODOすべてを完了の状態にする
    allDone() {
        //_todoListの中に入っているTodoすべてをステータス１にする
        //Todoオブジェクトのdone()メソッドを呼ぶ
        this._todoList.list.forEach(todo => {
            todo.done();
            //ステータス１のTodoを_doneListに追加する
            this._doneList.addTodo(todo);
        });

        //_todoListを空にする
        this._todoList.clearList();

        //_todoViewのupdateを呼ぶ
        this._todoView.update(this._todoList.list);
    }

}
