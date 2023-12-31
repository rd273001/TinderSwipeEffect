import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get( 'window' );
const cardData = [
  { id: 1, color: 'lightgreen' },
  { id: 2, color: 'lightblue' },
  { id: 3, color: 'beige' },
  { id: 4, color: 'orange' },
  { id: 5, color: 'pink' }
];

const App = () => {
  const handleSwipeLeft = () => {
    console.log( 'Swiped Left!' );
    // Handle actions when swiped left
  };

  const handleSwipeRight = () => {
    console.log( 'Swiped Right!' );
    // Handle actions when swiped right
  };

  return (
    <View style={ styles.container }>
      <Swiper
        cardHorizontalMargin={ width * 0.05 }
        cardVerticalMargin={ height * 0.1 }
        verticalSwipe={ false }
        cards={ cardData }
        renderCard={ ( card ) => {
          return (
            <View key={ card.id } style={ { ...styles.card, backgroundColor: card.color } }>
              <Text style={ styles.text }>{ card.color }</Text>
            </View>
          )
        } }
        onSwipedLeft={ handleSwipeLeft }
        onSwipedRight={ handleSwipeRight }
        backgroundColor='#F5F5F5'
        cardIndex={ 0 }
        infinite={ true }   // for making it loop(1st card will appear after last card is swiped)
        stackSize={ 3 }
        stackSeparation={ height * 0.03 }
        animateCardOpacity
        animateOverlayLabelsOpacity
        overlayLabels={{
            left: {
              title: '✖',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderRadius: width * 0.5,   // using max. width as radius for making it circular
                  height: height * 0.1,
                  width: height * 0.1,
                  textAlign: 'center',
                  color: '#fff',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: height * 0.05,
                  marginLeft: -height * 0.05
                }
              }
            },
            right: {
              title: '✔',
              style: {
                label: {
                  backgroundColor: 'green',
                  borderRadius: width * 0.5, 
                  height: height * 0.1,
                  width: height * 0.1,
                  textAlign: 'center',
                  color: '#fff',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: height * 0.05,
                  marginLeft: height * 0.05
                }
              }
            },
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    alignSelf: 'center',
    width: width * 0.85,
    height: height * 0.7,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff'
  }
});

export default App;