# React vs React Native

## Similitudes

- Misma sintaxis JSX
- Mismos principios (components, props, state)
- Mismos hooks
- Mismo ecosistema de herramientas (TypeScript, testing, etc.)

## Diferencias Clave

### Componentes

**React (Web):**
```tsx
<div>
  <span>Hello</span>
  <button onClick={handleClick}>Click</button>
</div>
```

**React Native:**
```tsx
<View>
  <Text>Hello</Text>
  <TouchableOpacity onPress={handleClick}>
    <Text>Click</Text>
  </TouchableOpacity>
</View>
```

### Estilos

**React (Web):**
```tsx
<div style={{ color: 'red', fontSize: 16 }}>Hello</div>
// O con CSS
<div className="my-class">Hello</div>
```

**React Native:**
```tsx
<Text style={{ color: 'red', fontSize: 16 }}>Hello</Text>
// O con StyleSheet
const styles = StyleSheet.create({
  text: { color: 'red', fontSize: 16 }
});
<Text style={styles.text}>Hello</Text>
```

### Navegación

**React (Web):**
- React Router
- URLs y navegación del navegador

**React Native:**
- React Navigation
- Expo Router (file-based)
- Stack, Tabs, Drawer navigators

### APIs Nativas

**React Native:**
- Acceso a cámara, geolocalización, notificaciones push
- Native modules para funcionalidad específica de plataforma

## Expo

Expo simplifica el desarrollo React Native:
- No necesitas configurar Xcode/Android Studio
- Hot reload automático
- Expo Router para navegación
- EAS Build para builds en la nube
- Expo Updates para OTA updates

