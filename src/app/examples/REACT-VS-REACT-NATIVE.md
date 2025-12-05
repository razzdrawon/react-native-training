# React vs React Native

## Similarities

- Same JSX syntax
- Same principles (components, props, state)
- Same hooks
- Same tool ecosystem (TypeScript, testing, etc.)

## Key Differences

### Components

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

### Styling

**React (Web):**
```tsx
<div style={{ color: 'red', fontSize: 16 }}>Hello</div>
// Or with CSS
<div className="my-class">Hello</div>
```

**React Native:**
```tsx
<Text style={{ color: 'red', fontSize: 16 }}>Hello</Text>
// Or with StyleSheet
const styles = StyleSheet.create({
  text: { color: 'red', fontSize: 16 }
});
<Text style={styles.text}>Hello</Text>
```

### Navigation

**React (Web):**
- React Router
- URLs and browser navigation

**React Native:**
- React Navigation
- Expo Router (file-based)
- Stack, Tabs, Drawer navigators

### Native APIs

**React Native:**
- Access to camera, geolocation, push notifications
- Native modules for platform-specific functionality

## Expo

Expo simplifies React Native development:
- You don't need to configure Xcode/Android Studio
- Automatic hot reload
- Expo Router for navigation
- EAS Build for cloud builds
- Expo Updates for OTA updates
