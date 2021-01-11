import React from 'react';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
    render () {
        const { name, type, averageWeight, image } =  this.props.card;

        return (
            <div className='card'>
                <div>
                    <ul>
                        <li>Name: {name}</li>
                        <li>Type: {type}</li>
                        <li>Weigt: {averageWeight.value}{averageWeight.measurementUnit}</li>
                    </ul>
                </div>
                <div>
                    <img src={image} alt='teste' />
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    name: PropTypes.number,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
        value: PropTypes.string,
        measurementUnit: PropTypes.string
      }),
    image: PropTypes.string,
  };

export default Pokemon;






// id: 25,
//         name: "Pikachu",
//         type: 'Electric',
//         averageWeight: {
//             value: 6.0,
//             measurementUnit: "kg"
//         },
//         image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
//         moreInfo: