import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet, Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const mockData = {
        title: "Özel Soslu Akdeniz Salatası",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        calories: 210,
        time: "15 dk",
        servings: "2 Kişilik",
        ingredients: ["Marul", "Çeri Domates", "Zeytinyağı", "Limon", "Ceviz"],
        steps: [
          "Sebzeleri bol suyla yıkayın.",
          "Marulları ince ince doğrayın.",
          "Sos malzemelerini bir kasede karıştırıp üzerine dökün."
        ]
      };
      setRecipe(mockData);
      setLoading(false);
    }, 1500);
  }, []);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${recipe.title} tarifini denemelisin!`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#27ae60" />
        <Text>Tarif Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{recipe.title}</Text>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Text style={{ fontSize: 28 }}>{isFavorite ? "❤️" : "🖤"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoBadge}>⏱ {recipe.time}</Text>
            <Text style={styles.infoBadge}>🔥 {recipe.calories} kcal</Text>
          </View>

          <Text style={styles.sectionTitle}>Malzemeler</Text>
          {recipe.ingredients.map((item, index) => (
            <Text key={index} style={styles.listItem}>• {item}</Text>
          ))}

          <Text style={styles.sectionTitle}>Hazırlanış</Text>
          {recipe.steps.map((step, index) => (
            <Text key={index} style={styles.listItem}>{index + 1}. {step}</Text>
          ))}

          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareText}>Tarifi Paylaş</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 300 },
  content: { padding: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  infoRow: { flexDirection: 'row', marginVertical: 15, gap: 10 },
  infoBadge: { backgroundColor: '#eef2f3', padding: 8, borderRadius: 8 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  listItem: { fontSize: 16, marginBottom: 5 },
  shareButton: { backgroundColor: '#27ae60', padding: 15, borderRadius: 12, marginTop: 30, alignItems: 'center' },
  shareText: { color: 'white', fontWeight: 'bold' }
});
