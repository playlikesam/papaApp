import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Animated, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const notificationsData = [
  { id: '1', title: 'New Service Launch', message: 'We have launched new services for your convenience!', timestamp: '2024-09-15T10:00:00Z', icon: 'https://cdn-icons-png.flaticon.com/128/891/891449.png' },
  { id: '2', title: 'Premium Plan Available', message: 'Check out our new premium plan with added benefits!', timestamp: '2024-09-14T14:00:00Z', icon: 'https://cdn-icons-png.flaticon.com/128/3649/3649801.png' },
  { id: '3', title: 'Discount Offer', message: 'Enjoy a 20% discount on all services this month!', timestamp: '2024-09-13T09:00:00Z', icon: 'https://cdn-icons-png.flaticon.com/128/10317/10317757.png' },
  { id: '4', title: 'Service Reminder', message: 'Your scheduled service is coming up soon.', timestamp: '2024-09-12T16:00:00Z', icon: 'https://cdn-icons-png.flaticon.com/128/3374/3374550.png' },
];

const NotificationItem = ({ title, message, timestamp, icon }: { title: string; message: string; timestamp: string; icon: string }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const formattedDate = new Date(timestamp).toLocaleDateString();

  return (
    <Animated.View style={[styles.notificationItem, { opacity: fadeAnim }]}>
      <View style={styles.notificationHeader}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <View style={styles.titleContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.timestamp}>{formattedDate}</Text>
        </View>
      </View>
      <Text style={styles.notificationMessage}>{message}</Text>
    </Animated.View>
  );
};

const Notifications: React.FC = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            message={item.message}
            timestamp={item.timestamp}
            icon={item.icon}
          />
        )}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ff3131',
    flex: 1,
  },
  list: {
    paddingBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    marginLeft: 10,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#555',
  },
});

export default Notifications;