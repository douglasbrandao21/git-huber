/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList
} from 'react-native'
import Header from '../../components/Header/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'
import styles from './styles.js'
import RepositoryItem from './RepositoryItem/RepositoryItem'

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  }

  state = {
    data: [],
    loading: true,
    refreshing: false
  }

  async componentDidMount() {
    this.loadRepositories()
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true })
    const username = await AsyncStorage.getItem('@Githuber:username')
    const { data } = await api.get(`/users/${username}/repos`)

    this.setState({ data, loading: false, refreshing: false })
  }

  renderItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => {
    const { data, refreshing } = this.state
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {this.state.loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    )
  }
}
