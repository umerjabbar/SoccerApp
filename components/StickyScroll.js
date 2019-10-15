import React, { Component } from "react";
import { Animated } from "react-native";

export default class StickyScroll extends Component {

  render() {
    let {scrollY, headerHeight} = this.props.screenProps

    let onScroll = Animated.event(
      [{nativeEvent: {contentOffset: { y: scrollY }}}],
      { useNativeDriver: true }
    )

    const translateY = this.props.screenProps.scrollY.interpolate({
      inputRange:  [0, headerHeight],
      outputRange: [0, headerHeight],
      extrapolate: "clamp",
    })

    return (
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={this.props.style}
      >
        <Animated.View
          style={{
            paddingBottom: headerHeight,
            transform: [{translateY}],
          }}
        >
          {this.props.children}
        </Animated.View>
      </Animated.ScrollView>
    )

  }

}