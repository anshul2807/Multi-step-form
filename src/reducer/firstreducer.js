const shopListReducer = (state={} , action) => {
    switch(action.type){
        case "Add_email":
            state.email=action.payload.email;
            return state;
        case "Add_password":
            state.password=action.payload.password;
            return state;
        case "Add_fname":
            state.fname=action.payload.fname;
            return state;
        case "Add_lname":
            state.lname=action.payload.lname;
            return state;
        case "Add_day":
            state.day=action.payload.day;
            return state;
        case "Add_month":
            state.month=action.payload.month;
            return state;
        case "Add_year":
            state.year=action.payload.year;
            return state;
        
        default:
            return state;
    }
}
export default shopListReducer;