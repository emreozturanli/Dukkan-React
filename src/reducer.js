
export const reducer = (state,action) => {
    switch(action.type){

        case 'REMOVE':
            console.log(state.list);
            return {
                ...state, 
                list: state.list.filter((i)=> i.id !== action.payload )
            };

        case 'INCREASE':
            const increased = state.list.map((i)=>{
                if(i.id === action.payload){
                    return {...i, amount: i.amount + 1}
                }
                return i
            })
            return {
                ...state, 
                list: increased 
            };

        case 'DECREASE':
            const decreased = state.list.map((i)=>{
                if(i.id === action.payload){
                    return {...i, amount: i.amount - 1}
                }
                return i
            })
            const abowZeroFilter = decreased.filter((i)=> i.amount !== 0)
            return {
                ...state, 
                list: abowZeroFilter 
            };

        case 'CHANGEAMOUNT':
             
            return {
                ...state, 
                totalAmount : state.list.reduce( (a, b)=>  a + b.amount , 0)
            };

        case 'TOTALPRICE':
            return {
                ...state, 
                totalPrice: state.list.reduce( (a, b)=>  a + b.price*b.amount , 0)
            };
        case 'CLEAR':
            return {
                ...state, 
                list : []
            };
            
        default:
            console.log('default');
    }
 
}
