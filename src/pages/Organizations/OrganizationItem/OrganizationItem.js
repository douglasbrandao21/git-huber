import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import styles from './styles'

const Organizationitem = ({ organization }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
      <Text style={styles.title}>{organization.login}</Text>
    </View>
  )
}

Organizationitem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.login
  })
}

export default Organizationitem
