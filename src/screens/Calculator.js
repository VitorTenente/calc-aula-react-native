import React, { Component } from 'react'
import { 
    StyleSheet, View
 } from 'react-native'
import Display from '../components/Display'
import Button from '../components/Button'


 export default class Calculator extends Component {

    state = {}

    render() {
        return (
            <View style={styles.container}>
                <Display/>
                <View style={styles.buttons}>
                    <Button label='AC' threeCollumn/>
                    <Button label='/' operation/>
                    <Button label='7'/>
                    <Button label='8'/>
                    <Button label='9'/>
                    <Button label='*' operation/>
                    <Button label='4'/>
                    <Button label='5'/>
                    <Button label='6'/>
                    <Button label='-' operation/>
                    <Button label='1'/>
                    <Button label='2'/>
                    <Button label='3'/>
                    <Button label='+' operation/>
                    <Button label='0' twoCollumns/>
                    <Button label='.'/>
                    <Button label='=' operation/>
                </View>
            </View>
        )
    }
 }

const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     buttons: {
         flexDirection: 'row',
         flexWrap: 'wrap'
     }
})