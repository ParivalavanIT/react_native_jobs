import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import { FlatList } from 'react-native';
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
 const {data,isLoading,error}=useFetch(
  'search',{
    query:'React developer',
    num_page:1
  }
 )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size='large' colors={COLORS.primary} />)
          : error ? (
            <Text>Something Went wrong</Text>) :
            (<FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => (
                <PopularjobCard
                  item={item} />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal />
            )}</View>
    </View>
  )
}

export default Popularjobs