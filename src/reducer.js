const initialstate = {
	TodoList: [
		{ id: 1, description: 'Redux', done: false, show: true },
		{ id: 2, description: 'API', done: false, show: true },
		{ id: 3, description: 'Node.js', done: false, show: true }
	]
};

const reducer = (state = initialstate, { type, id, description, index, editindex, newid, newdes }) => {
	if (type === 'add') {
		return {
			TodoList: [ ...state.TodoList, { id: id, description: description, done: false, show: true } ]
		};
	} else if (type === 'delete') {
		let v = [ ...state.TodoList ];
		v.splice(index, 1);
		return { TodoList: v };
	} else if (type == 'done') {
		let v = [ ...state.TodoList ];
		v[index].done = !v[index].done;
		return { TodoList: v };
	} else if (type == 'alltask') {
		return {
			TodoList: [ ...state.TodoList ].map((obj) => {
				return { ...obj, show: true };
			})
		};
	} else if (type == 'donetask') {
		return {
			TodoList: [ ...state.TodoList ].map((obj) => {
				return obj.done ? { ...obj, show: true } : { ...obj, show: false };
			})
		};
	} else if (type == 'notdonetask') {
		return {
			TodoList: [ ...state.TodoList ].map((obj) => {
				return obj.done ? { ...obj, show: false } : { ...obj, show: true };
			})
		};
	} else if (type === 'edit') {
		let v = [ ...state.TodoList ];
		v[editindex].id = newid;
		v[editindex].description = newdes;
		return { TodoList: v };
	}
	// }else if(type=='notdone'){
	//  // let s=[...state.TodoList].filter(obj=> obj.done===true)
	//  let s=[...state.TodoList]
	//  return({TodoList:[...state.TodoList].filter((obj)=>{return((obj.done)==false)})})
	// }

	return state;
};

export default reducer;
