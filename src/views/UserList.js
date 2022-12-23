import React from 'react'
import { FlatList, View } from 'react-native'
import { Avatar, ListItem } from '@rneui/themed'
import users from '../data/users'

export default props => {

  function getUserItem({ item: user }) {
    return (
      <ListItem
        onPress={() => props.navigation.navigate('UserForm')}
        bottomDivider
        topDivider>
        <Avatar title={user.name} source={{ uri: user.avatarUrl }} rounded />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}