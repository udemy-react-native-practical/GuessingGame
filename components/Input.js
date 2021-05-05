import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    //...props forwards all components to element
    return(
        <TextInput {...props} style={{...styles.input, ...props.style }}>
            
        </TextInput>
    );

}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;
