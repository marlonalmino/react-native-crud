import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})
  return (
    <View style={style.form}>
      <Text style={style.label}>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({ ...user, name })}
        placeholder='Informe o Nome'
        value={user.name}
      />

      <Text style={style.label}>E-mail</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({ ...user, email })}
        placeholder='Informe o E-mail'
        value={user.email}
      />

      <Text style={style.label}>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
        placeholder='Informe a URL do Avatar'
        value={user.avatarUrl}
      />

      <Button
        title='Salvar'
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  label: {
    marginLeft: 15
  },
})