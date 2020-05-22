import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert, Text } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    var [value1, setValue1]  = useState(value1);
    var [value2, setValue2]  = useState(value2);
    const x1 = 0, x2 = 4
    var y1, y2

    const pressHandler = () => {
        if (value1 != 0) {
            y1 = value1 * x1 - value2
            y2 = value1 * x2 - value2
            Alert.alert(title = 'Точки построения', message = 'x1 = ' + x1 + ' \ty1 = ' + y1 +
            '\nx2 = ' + x2 + ' \ty2 = ' + y2 )
        } 
        else if ( value1 == 0 || value1 == '') {
            Alert.alert('Первое поле ввода не должно быть пустым и не равно 0');
        }
    };

    return (
        <View>
            <View style = {styles.block}>
                <Text style = {styles.func}>y = </Text>
                <TextInput 
                    placeholder = '1'    
                    style = {styles.input}
                    keyboardType = 'numeric'  
                    onChangeText = {setValue1}                                      
                    value1 = {value1}
                    maxLength = {8}
                />
                <Text style = {styles.func}> x - </Text>
                <TextInput 
                    placeholder = '0'                
                    style = {styles.input}
                    keyboardType = 'numeric'  
                    onChangeText = {setValue2}                  
                    value2 = {value2}
                    maxLength = {8}                    
                />
            </View>
            <View style = {styles.buttons}>
                <Button color = '#5E4BD8' title = " Рассчитать " onPress = {pressHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    func: {
        fontSize: 30
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '16%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        fontSize: 20,
        textAlign: 'center',
        borderBottomColor: '#5E4BD8'
    },
    buttons: {
      width: '100%',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15
    }
});