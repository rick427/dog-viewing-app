import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './doglist.css';

class DogList extends Component {
  render() {
    return (
      <div className="doglist">
        <h1 className="display-3 text-center mb-3">Dog List!</h1>   
          <div className="row">
              {this.props.dogs.map(dog => (
                  <div className="col-lg-4 text-center dog" key={dog.name}>
                    <img src={dog.src} alt={dog.name} className="rounded shadow"/>
                    <h3 className="mt-4 lead">
                      <Link className="underline" to={`/dogs/${dog.name}`}>
                        {dog.name}
                      </Link>
                    </h3>
                  </div>
              ))}
          </div>
      </div>
    )
  }
}
export default DogList;
