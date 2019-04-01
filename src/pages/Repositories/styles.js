import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },
  loading: {
    marginTop: metrics.baseMargin * 4
  }
})

export default styles
