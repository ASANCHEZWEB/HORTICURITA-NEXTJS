import React from "react";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }



  render() {
    return (
      <>
    
     
        <h1>esta es la home page con sus estilos</h1>
        <style jsx>{`
          * {
            color: blue;
          }
        `}</style>
      </>
    );
  }
}




export default Home;
