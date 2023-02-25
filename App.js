import { Image } from 'expo-image'
import { Text, View } from 'react-native'
import { Blurhash } from 'react-native-blurhash'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32
      }}
    >
      <Text>Demo expo-image is broken on some blurhashes</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Image
          source='UMJ7~,%L~pxt%hahM}a#?ZkCD%WBS5Rjn~WD'
          style={{ width: 100, height: 100, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        />
        <Blurhash
          blurhash='UMJ7~,%L~pxt%hahM}a#?ZkCD%WBS5Rjn~WD'
          style={{ width: 100, height: 100, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Image
          source='ULGuq0M{D*off-IVbbxa01WBWVt7jW%LV@Rk'
          style={{ width: 100, height: 100, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        />
        <Blurhash
          blurhash='ULGuq0M{D*off-IVbbxa01WBWVt7jW%LV@Rk'
          style={{ width: 100, height: 100, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        />
      </View>
    </View>
  )
}
