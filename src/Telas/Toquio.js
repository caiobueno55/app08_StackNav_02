import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Toquio() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Image 
          source={{ uri: 'https://www.revigorate.com/images/Geishas-traditional-kimono-Senso-Temple-Asakusa-Tokyo.jpg' }} 
          style={styles.imagem} 
        />
        <Text style={styles.titulo}>TÓQUIO</Text>
        <Text style={styles.subtitulo}>Tecnologia e Tradição</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.secaoTitulo}>Introdução</Text>
        <Text style={styles.textoConteudo}>
          Tóquio, a movimentada capital do Japão, mistura o ultramoderno com o tradicional, desde arranha-céus iluminados por neon a templos históricos.
        </Text>

        <Text style={styles.secaoTitulo}>Origens e Cultura</Text>
        <Text style={styles.textoConteudo}>
          Originalmente uma vila de pescadores chamada Edo, a cidade mudou seu nome para Tóquio (Capital do Leste) em 1868, quando se tornou a sede imperial oficial do país.
        </Text>
        
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Autor: Aluno Dsv Mobile</Text>
        <Text style={styles.rodapeTexto}>Data: 2026</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  cabecalho: { alignItems: 'center', paddingBottom: 15 },
  imagem: { width: '100%', height: 220 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#059669', marginTop: 10 },
  subtitulo: { fontSize: 16, color: '#6B7280' },
  corpo: { padding: 20 },
  secaoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginTop: 15, marginBottom: 5 },
  textoConteudo: { fontSize: 15, color: '#4B5563', lineHeight: 22 },
  botaoVoltar: { backgroundColor: '#059669', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 25 },
  botaoTexto: { color: '#FFF', fontWeight: 'bold' },
  rodape: { borderTopWidth: 1, borderColor: '#F3F4F6', padding: 15, alignItems: 'center' },
  rodapeTexto: { fontSize: 12, color: '#9CA3AF' }
});