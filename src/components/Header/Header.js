import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from 'react-native'
import { withNavigation } from 'react-navigation'
import styles from './styles'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  }

  state = {}

  signOut = async () => {
    const { navigation } = this.props

    await AsyncStorage.clear()

    navigation.navigate('Welcome')
  }

  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="sign-out" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Header)
