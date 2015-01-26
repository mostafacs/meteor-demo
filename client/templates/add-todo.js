
Template.addTodo.rendered=function(){
  this.$('#todoDate').datepicker();
}
  
Session.set('feedback','');

Template.addTodo.helpers({
	feedback : function(){
		return Session.get('feedback');
	}
});

Template.addTodo.events({

"click .addTodoButton":function(event){

  todoText = $("#todoText").val() ;
  todoDate = $("#todoDate").val() ;

  Todos.insert({text:todoText,date:todoDate,createdAt:new Date()});
  Session.set('feedback','Todo Added');
  
}

});