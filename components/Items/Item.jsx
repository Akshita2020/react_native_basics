import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Item = ({Name, Price}) => {
  return (
    <View>
      <Text>{Name}</Text>
      <Text>{Price}</Text>
    </View>
  );
};
Item.PropTypes = {
  Name: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
};
export default Item;
