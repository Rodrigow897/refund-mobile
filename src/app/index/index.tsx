import Button from '@/components/Button';
import Input from '@/components/Input';
import List from '@/components/List';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#E4ECE9' }} edges={['top', 'left', 'right']}>
        <StatusBar barStyle="dark-content" backgroundColor="#E4ECE9" />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <MaterialCommunityIcons name="redo-variant" size={32} color="#1F8459" />
              <Text style={{fontSize:22, fontWeight: 'bold', color: '#1F8459'}}>refund</Text>
            </View>

            <View style={styles.headerDown}>

              <TouchableOpacity activeOpacity={0.4}>
                <Text style={{fontSize:16, fontWeight: 'bold', color: '#1F8459'}}>Solicitações de reembolso</Text>
              </TouchableOpacity>
              <Button title='Nova solicitação' />
            </View> 
          </View>

          <View style={styles.section}>
            <Text style={{fontSize:18, fontWeight: 'bold', color: '#000'}}>Solicitações</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Input style={{width: '85%'}}/>
            <TouchableOpacity activeOpacity={0.6} style={{padding: 8, height: 40, width: 40,backgroundColor: '#1F8459', borderRadius: 5}}>
              <Feather name="search" size={22} color="white" />
            </TouchableOpacity>
            </View>
          
            <View style={{marginTop: 5, width: '100%',   alignItems: 'center'}}>
              <List

              />
            </View>
            
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}