import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NovaYork() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600' }} 
          style={styles.imagem} 
        />
        <Text style={styles.titulo}>NOVA YORK</Text>
        <Text style={styles.subtitulo}>A Cidade que Nunca Dorme</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.secaoTitulo}>Introdução</Text>
        <Text style={styles.textoConteudo}>
          Nova York compreende 5 distritos situados no encontro do Rio Hudson com o Oceano Atlântico. No seu centro fica Manhattan, um distrito de alta densidade demográfica que está entre os principais centros comerciais, financeiros e culturais do mundo.
        </Text>

        <Text style={styles.secaoTitulo}>Origens</Text>
        <Text style={styles.textoConteudo}>
          Fundada originalmente por colonos holandeses em 1624 como um posto de troca de peles, a vila foi batizada de "Nova Amsterdã". Em 1664, os ingleses assumiram o controle e a renomearam para Nova York.
        </Text>
        
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Caio Bueno e Fernando Emanuel</Text>
        <Text style={styles.rodapeTexto}>29/05/2026</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  cabecalho: { alignItems: 'center', paddingBottom: 15 },
  imagem: { width: '100%', height: 220 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#D97706', marginTop: 10 },
  subtitulo: { fontSize: 16, color: '#6B7280' },
  corpo: { padding: 20 },
  secaoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginTop: 15, marginBottom: 5 },
  textoConteudo: { fontSize: 15, color: '#4B5563', lineHeight: 22 },
  botaoVoltar: { backgroundColor: '#D97706', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 25 },
  botaoTexto: { color: '#FFF', fontWeight: 'bold' },
  rodape: { borderTopWidth: 1, borderColor: '#F3F4F6', padding: 15, alignItems: 'center' },
  rodapeTexto: { fontSize: 12, color: '#9CA3AF' }
});
