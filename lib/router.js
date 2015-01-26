
Router.configure({
	layoutTemplate :'appLayout'
});

Router.route('/', function () {
	// this.layout('appLayout');
  this.render('todoList', {  });
},{
	name : "home"
}

);
        
Router.route('/add',function(){
	// this.layout('appLayout');
  this.render('addTodo', {  });	
},{
	name : "add"
});