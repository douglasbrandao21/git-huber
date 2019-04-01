/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import './config/reactotronConfig'
import createNavigator from './routes'

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username')
    this.setState({ userChecked: true, userLogged: !!username })
  }

  render() {
    const { userChecked, userLogged } = this.state

    if (!userChecked) return null

    const Routes = createNavigator(userLogged)

    return <Routes />
  }
}
