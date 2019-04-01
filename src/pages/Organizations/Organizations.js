/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {
  View,
  Text,
  AsyncStorage,
  FlatList,
  ActivityIndicator
} from 'react-native'
import Header from '../../components/Header/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'
import OrganizationItem from './OrganizationItem/OrganizationItem'
import styles from './styles'

export default class Organizations extends Component {
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
    this.loadOrganizations()
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true })
    const username = await AsyncStorage.getItem('@Githuber:username')
    const { data } = await api.get(`/users/${username}/orgs`)

    this.setState({ data, loading: false, refreshing: false })
  }

  renderItem = ({ item }) => <OrganizationItem organization={item} />

  renderList = () => {
    const { data, refreshing } = this.state
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {this.state.loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    )
  }
}
