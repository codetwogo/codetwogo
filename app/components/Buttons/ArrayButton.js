import React, { Component } from 'react';
import { ListView, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class ArrayButton extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ArrayKeys: ds.cloneWithRows([
                {title: 'length', output: '.length'},
                {title: 'slice', output: '.slice()'}, 
                {title: 'splice', output: '.splice()'}, 
                {title: 'pop', output: '.pop()'},
                {title: 'push', output: '.push()'},
                {title: 'shift', output: '.shift()'},
                {title: 'unshift', output: '.unshift()'},
                {title: 'sort', output: '.sort()'},
                {title: 'join', output: '.join()'},
                {title: 'concat', output: '.concat()'}
            ]),

        };
    }

    render() {
        return (
                <ListView
                  dataSource={this.state.ArrayKeys}
                  renderRow={(rowData)=>
                    <TouchableOpacity onPress={()=> {this.props.edit(rowData.output);
                    return this.props.toggle();}}>
                    <Text style={styles.hotKey}>
                    {rowData.title}
                    </Text>
                  </TouchableOpacity>}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    hotKey:{
      flex: 1,
      color: 'green'
    }
});