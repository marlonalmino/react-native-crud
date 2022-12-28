import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Avatar, ListItem, Button, Icon } from '@rneui/themed'
import UsersContext from '../context/UserContext'

export default props => {

  const { state, dispatch } = useContext(UsersContext)

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'delete',
            payload: user,
          })
        }
      },
      {
        text: 'Não'
      },
    ])
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        onPress={() => props.navigation.navigate('UserForm', user)}
        bottomDivider>
        <Avatar title={user.name} source={{ uri: user.avatarUrl }} rounded />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>

        <Button
          onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => { confirmUserDeletion(user) }}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}