import React, { Component } from 'react';
class Home extends Component {
  constructor(props){
    super();
    this.state = {
      name:"Sajib"
    }
  }

  chnageName = () => {
    this.setState({
    name : "Dola"
    })
  }
  render() {
    const data = [
{
  id:1,
  name:"Sajib",
  position:"Web dev"
},
{
  id:1,
  name:"Shouvik",
  position:"Web dev"
},
{
  id:1,
  name:"Anubha",
  position:"Web dev"
}
,{
  id:1,
  name:"Tushar",
  position:"Web dev"
}
    ]

   const myData = data.map((value,index) =>{
     return(
           <div key={index}>
             <h1>{data[index].name}</h1>
             <p>{data[index].position}</p>
           </div>
     )
   })
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        {myData}
        <button onClick={()=>this.chnageName()}>Change Data</button>
      </div>
    );
  }
}

export default Home;