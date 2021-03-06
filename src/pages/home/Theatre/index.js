import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {Text, View, StyleSheet, Button, Animated} from "react-native";

import Submitted from "../../../components/Submitted";
import useAnimation from "../../../hooks/useAnimation";

const Theatre = ({theatre, handleBook}) => {
  const user = useSelector((state) => state.user);
  const {bookings} = useSelector((state) => state.myBookings);
  const isConnected = useSelector((state) => state.connection);

  const date = useMemo(() => new Date(theatre.date), [theatre.date]);

  const isBooked = useMemo(
    () => bookings.find((book) => book.theatreId === theatre._id),
    [bookings]
  );

  const imgAnim = useAnimation(0, {
    toValue: 1,
    duration: 500,
    delay: 300,
  });

  return (
    <View style={styles.theatre}>
      <Text style={styles.theatre_name}>
        {theatre.name}
      </Text>
      <Animated.Image
        style={{...styles.theatre_image, opacity: imgAnim, transform: [{scale: imgAnim}]}}
        source={{uri: theatre.image}}
      />
      <View style={styles.theatre_actions}>
        <Text style={styles.theatre_date}>
          {date.toLocaleDateString()}
          <Text style={styles.theatre_date_divider}> </Text>
          {date.toLocaleTimeString().slice(0, 5)}
        </Text>
        {(user && !isBooked) &&
          <Button disabled={!isConnected} onPress={() => handleBook(theatre)} color="#6200EE" title="Book" />}
        {isBooked && <Submitted />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  theatre: {
    width: '100%',
    backgroundColor: '#dedbdb',
    padding: 20,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },
  theatre_name: {
    textAlign: 'center',
    fontFamily: 'njnaruto',
    fontSize: 26,
    color: '#000000',
    marginBottom: 10,
    width: '100%',
  },
  theatre_image: {
    width: 250,
    height: 200,
    borderRadius: 4,
  },
  theatre_actions: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    minHeight: 44,
  },
  theatre_date: {
    fontSize: 16,
    color: '#000',
  },
  theatre_date_divider: {
    marginLeft: 5,
  },
  booking_submitted: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  booking_submitted_text: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    fontFamily: 'njnaruto',
  },
});

export default Theatre;
