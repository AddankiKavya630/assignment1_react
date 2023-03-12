import React from 'react';
import Fakers from 'faker' 
import './style.css'

function App(){
  return (
    <div className='container'>
  <div className="ui cards">
  <div className="card">
    <div className="content">
      {/* <img className="right floated mini ui image" src={Fakers.image.image()} alt="image" /> */}
    <img src={Fakers.image.image()} className="right floated mini ui image" alt="image"></img>

      <div className="header">
        Elliot Fu
      </div>
      <div className="meta">
        Friends of Veronika
      </div>
      <div className="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src={Fakers.image.image()} alt="image" />
      <div className="header">
        Jenny Hess
      </div>
      <div className="meta">
        New Member
      </div>
      <div className="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
</div>);


}

export default App;