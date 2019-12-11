
import {db} from '../firebase'


export const changeName = (name) => {


    return {

        type: "CHANGE_NAME",
        payload: name

    }




}


export const middleapi = () => {


    return (dispatch) => {


            db.on("value",(snapshot)=>{


                dispatch({

                        type:"GETTING_DATA",
                        payload:snapshot.val(),


                })




            })


    }




}


export const deleteData=(param)=>{

    return(dispatch)=>{


            db.child(param).remove().then(()=>{

                    dispatch(
                    {   
                            type:"DELETE_DATA",


                    }            

                    )



            })




    }







} 