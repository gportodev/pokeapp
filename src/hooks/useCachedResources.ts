import { useFonts } from 'expo-font';

export default function CachedResources(): boolean {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_600SemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_700Bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    Inter_400Regular: require('../assets/fonts/Inter-Regular.ttf'),
    Inter_500Medium: require('../assets/fonts/Inter-Medium.ttf'),
    Inter_600SemiBold: require('../assets/fonts/Inter-SemiBold.ttf'),
  });

  return fontsLoaded;
}
