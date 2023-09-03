import { StatusBar } from 'expo-status-bar'

import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { Dimensions } from 'react-native'


import {Feather} from '@expo/vector-icons'

import {
  TelaPrincipal,
  TelaDeMensagem,
  TelaDeAtividade,
  TelaDeListagem,
  TelaDeReport,
  TelaDeEstatistica,
  TelaDeSigout
} from "./src/telas"

import MenuLateral from './src/components'

const DrawerNavigator = createDrawerNavigator({
  
  TelaPrincipal,
  TelaDeMensagem,
  TelaDeAtividade,
  TelaDeListagem,
  TelaDeReport,
  TelaDeEstatistica,
  TelaDeSigout
},)
  contentComponent: props => <MenuLateral {...props} />
export default createAppContainer(DrawerNavigator);
