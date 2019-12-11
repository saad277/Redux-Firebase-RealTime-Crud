import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux'
import { changeName, middleapi, deleteData } from './REDUX/actions'



class App extends Component {



  state = {

    name: ""

  }



  inputHandler = (event) => {

    event.preventDefault();

    this.setState({

      [event.target.name]: event.target.value


    })




  }

  componentDidMount() {

    this.props.middleapi();

  }


  render() {

    console.log(this.props)

    if (this.props.name != null) {


      const data = Object.keys(this.props.name).map(x => {

        console.log(this.props.name[x])

        return (

          <ul>
            <li>   {this.props.name[x]}          </li>   
            <button onClick={()=>this.props.delete(x)}>    Delete            </button>
           
          </ul>
         

        )


      })

      console.log(data)




      return (
        <div className="App">


          <div className="App-header">
            <h2>    Redux Firebase         </h2>
          </div>


          <div className="left row s12">


            <div className="input-field col s6">



              <input placeholder="Enter Value" name="name" type="text" className="validate" onChange={this.inputHandler} />



              <button onClick={() => this.props.delete(this.state.name)} >      Click to change state       </button>


            </div>



          </div>

          <div className="left row s12">


            <div className="col s6">

              <h4 >     Redux Output  :     </h4>


              <div >     {data}        </div>



            </div>



          </div>





        </div>
      );

    } else {

      return (<h2>   Loading....     </h2>)

    }


  }
}






const mapStateToProps = (state) => {


  return {


    name: state.fetched


  }



}


const mapDispatchToProps = (dispatch) => {


  return {


    change: (name) => {

      dispatch(

        changeName(name)

      )


    },


    middleapi: () => {


      dispatch(
        middleapi()

      )

    },

    delete: (param) => {


      dispatch(
        deleteData(param)

      )

    }





  }





}


export default connect(mapStateToProps, mapDispatchToProps)(App);
