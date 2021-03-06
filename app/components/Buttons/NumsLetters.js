import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

export default ({ edit, shiftLeft, shiftRight, del, space, capslock, caps, symslock, syms }) => {
  const nums = '1234567890'.split('');
  const topRow = 'qwertyuiop'.split('');
  const middleRow = 'asdfghjkl'.split('');
  const bottomRow = 'zxcvbnm'.split('');

  const symTr = '#%^*+-=/"<>'.split('');
  const symMr = ":;()$&@_\|~".split('');
  const symBr = ".,?!'[]{}".split('');

  // const mathTr= "[]{}#%^*+=".split('');
  // const mathMr= "_\|~<>".split('');
  // const symMr="-/:;()$&@".split('');
  // const symBr=".,?!'".split('');
  const funcs = [
    { title: '<<  |', output: shiftLeft, flx: 1 },
    { title: 'Space', output: space, flx: 2 },
    { title: 'Del', output: del, flx: 1 },
    { title: '|  >>', output: shiftRight, flx: 1 }
  ];

  var cap = caps;
  var sym = syms;

  const keys = [nums, topRow, middleRow, bottomRow];
  const symboard = [symTr, symMr, symBr];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.capsKey}
        key='caps'
        onPress={() => capslock()} >
        <Text style={styles.funcButtonText}>Caps</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.capsKey}
        key='Syms'
        onPress={() => symslock()} >
        <Text style={styles.funcButtonText}>{sym ? "ABC" : "Sym"}</Text>
      </TouchableOpacity>
      {
        sym
          ?
          symboard.map((row) => {
            return (
              <View
                key={row}
                style={styles.smallContainer}>
                {row.map((key) => {
                  if (cap) {
                    key = key.toUpperCase();
                  }
                  return (
                    <TouchableOpacity
                      style={styles.hotKey}
                      key={key}
                      onPress={() => edit(key)} >
                      <Text style={styles.buttonText}>{key}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })
          :
          keys.map((row) => {
            return (
              <View
                key={row}
                style={styles.smallContainer}>
                {row.map((key) => {
                  if (cap) {
                    key = key.toUpperCase();
                  }
                  return (
                    <TouchableOpacity
                      style={styles.hotKey}
                      key={key}
                      onPress={() => edit(key)} >
                      <Text style={styles.buttonText}>{key}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })
      }
      <View style={styles.smallContainer}>
        {funcs.map((func) => {
          let flx = func.flx;
          return (
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.funcKey, {
                  flex: flx
                }
              ])}
              key={func.title}
              onPress={() => func.output()} >
              <Text style={styles.funcButtonText}>
                {func.title}
              </Text>
            </TouchableOpacity>
          );
        }
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 50,
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  smallContainer: {
    minWidth: 360,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hotKey: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    width: 30,
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 5,
    backgroundColor: '#999999'
  },
  funcKey: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#888888',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    margin: 3,
    borderWidth: 1
  },
  capsKey: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#888888',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    margin: 3,
    borderWidth: 1
  },
  buttonText: {
    color: '#444444'
  },
  funcButtonText: {
    color: '#999999'
  }
});
