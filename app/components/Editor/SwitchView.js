import React from 'react';
import {View, Switch, Text} from 'react-native';

import ClipButtons from '../ClipButtons';

export default ({switchVal, onSwitchChange, onQuestionSwitchChange, switchQuestion, description, edit, showQuestion}) => {
    return (
        <View style={{
          flex: 0.8 }}>
          <View style={{
            flexDirection:'row'}}>
            <View style={{
              flexDirection:'row'}}>
                <Switch
                    value={switchVal}
                    onValueChange={(value) => {onSwitchChange(value);}} />
                <Text>Hide Keyboard</Text>
            </View>
            <View style={{
              flexDirection:'row'}}>
                <Switch
                    value={showQuestion}
                    onValueChange={(value) => {onQuestionSwitchChange(value);}} />
                <Text>Show Question</Text>
              </View>
              </View>
                {
                    showQuestion ? <Text>{description}</Text> : null
                }
              {switchVal ?
                <ClipButtons edit={edit} /> :
                null
              }
        </View>
    );
};
