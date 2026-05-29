import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Switch 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DADOS_DESTINOS = [
  { id: '1', nome: 'Paris', continente: 'Europa', rota: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500' },
  { id: '2', nome: 'Tóquio', continente: 'Ásia', rota: 'Toquio', img: 'https://www.revigorate.com/images/Geishas-traditional-kimono-Senso-Temple-Asakusa-Tokyo.jpg' },
  { id: '3', nome: 'Nova York', continente: 'América', rota: 'NovaYork', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500' },
];

export default function Principal() {
  const navigation = useNavigation();
  const [continente, setContinente] = useState('Todos');
  const [modoEscuro, setModoEscuro] = useState(false);

  const dadosFiltrados = continente === 'Todos' 
    ? DADOS_DESTINOS 
    : DADOS_DESTINOS.filter(item => item.continente === continente);

  return (
    <View style={[styles.container, modoEscuro && styles.containerDark]}>
      
      <View style={[styles.controles, modoEscuro && styles.controlesDark]}>
        <View style={styles.linhaSwitch}>
          <Text style={[styles.texto, modoEscuro && styles.textoDark]}>Modo Escuro:</Text>
          <Switch value={modoEscuro} onValueChange={setModoEscuro} />
        </View>

        <Text style={[styles.label, modoEscuro && styles.textoDark]}>Filtrar Continente:</Text>
        <View style={styles.botoesFiltro}>
          {['Todos', 'Europa', 'Ásia', 'América'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.botaoFiltro, continente === item && styles.botaoFiltroAtivo]}
              onPress={() => setContinente(item)}
            >
              <Text style={[styles.textoFiltro, continente === item && styles.textoFiltroAtivo]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={dadosFiltrados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, modoEscuro && styles.cardDark]}>
            <Image source={{ uri: item.img }} style={styles.cardImagem} />
            <View style={styles.cardInfo}>
              <Text style={[styles.cardTitulo, modoEscuro && styles.textoDark]}>{item.nome}</Text>
              <Text style={styles.cardSub}>{item.continente}</Text>
              <TouchableOpacity 
                style={styles.botaoAcessar} 
                onPress={() => navigation.navigate(item.rota)}
              >
                <Text style={styles.botaoAcessarTexto}>Explorar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Caio Bueno e Fernando Emanuel</Text>
        <Text style={styles.rodapeTexto}>29/05/2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', padding: 15 },
  containerDark: { backgroundColor: '#111827' },
  controles: { marginBottom: 15, padding: 12, backgroundColor: '#FFF', borderRadius: 10, elevation: 2 },
  controlesDark: { backgroundColor: '#1F2937' },
  linhaSwitch: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  texto: { fontSize: 16, color: '#374151', fontWeight: '500' },
  textoDark: { color: '#FFF' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#4B5563', marginBottom: 8 },
  botoesFiltro: { flexDirection: 'row', justifyContent: 'space-between' },
  botaoFiltro: { backgroundColor: '#E5E7EB', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6 },
  botaoFiltroAtivo: { backgroundColor: '#1E3A8A' },
  textoFiltro: { color: '#374151', fontSize: 13, fontWeight: '600' },
  textoFiltroAtivo: { color: '#FFF' },
  card: { flexDirection: 'row', backgroundColor: '#FFF', marginBottom: 15, borderRadius: 10, overflow: 'hidden', elevation: 3 },
  cardDark: { backgroundColor: '#1F2937' },
  cardImagem: { width: 110, height: 110 },
  cardInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
  cardTitulo: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
  cardSub: { fontSize: 14, color: '#9CA3AF' },
  botaoAcessar: { backgroundColor: '#1E3A8A', padding: 8, borderRadius: 6, alignItems: 'center' },
  botaoAcessarTexto: { color: '#FFF', fontWeight: 'bold' },
  rodape: { borderTopWidth: 1, borderColor: '#E5E7EB', paddingVertical: 10, alignItems: 'center', marginTop: 10 },
  rodapeTexto: { fontSize: 12, color: '#9CA3AF' }
});
