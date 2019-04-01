import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles/index'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePaddiing
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker
  },
  icon: {
    fontSize: 25,
    color: colors.darker,
    paddingHorizontal: 5
  }
})

export default styles
