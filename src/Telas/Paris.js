import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Paris() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600' }} 
          style={styles.imagem} 
        />
        <Text style={styles.titulo}>PARIS</Text>
        <Text style={styles.subtitulo}>Curiosidades da Cidade Luz</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.secaoTitulo}>Introdução</Text>
        <Text style={styles.textoConteudo}>
          Paris é a capital da França e um dos centros mundiais da arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena.
        </Text>

        <Text style={styles.secaoTitulo}>Origens e História</Text>
        <Text style={styles.textoConteudo}>
          Fundada no século III a.C. por um povo celta chamado "Parisii", a cidade foi inicialmente uma pequena vila de pescadores antes de se tornar uma das maiores metrópoles do império Romano do Ocidente.
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
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#E11D48', marginTop: 10 },
  subtitulo: { fontSize: 16, color: '#6B7280' },
  corpo: { padding: 20 },
  secaoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginTop: 15, marginBottom: 5 },
  textoConteudo: { fontSize: 15, color: '#4B5563', lineHeight: 22 },
  botaoVoltar: { backgroundColor: '#E11D48', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 25 },
  botaoTexto: { color: '#FFF', fontWeight: 'bold' },
  rodape: { borderTopWidth: 1, borderColor: '#F3F4F6', padding: 15, alignItems: 'center' },
  rodapeTexto: { fontSize: 12, color: '#9CA3AF' }
});
