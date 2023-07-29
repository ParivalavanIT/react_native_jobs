import React from 'react'
import { View, Text } from 'react-native'

import styles from './screenheader.style'
import { TouchableOpacity,Image } from 'react-native';
import { icons } from '../../../constants'

const ScreenHeaderBtn = ({iconUrl,dimension,handlepress}) => {
  return (
 <TouchableOpacity style={styles.btnContainer}>
  <Image
    source ={iconUrl}
    resizeMode = 'cover'
    style = {styles.btnImg(dimension)}
  />
 </TouchableOpacity>
  )
}

export default ScreenHeaderBtn