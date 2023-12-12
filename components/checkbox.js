import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

export default function CustomCheckbox({onClick, color, onClickS}) {
  const [isSelected, setSelection] = React.useState(false);
  console.log(isSelected, 'ischeckbox');
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
        setSelection(!isSelected);
        onClickS(isSelected)
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="rightcircle" size={32} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}
