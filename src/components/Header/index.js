import React, {Component} from 'react';

import {withNavigation} from 'react-navigation';

import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';

import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  returnToRepos = async () => {
    const {navigation} = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Repositories');
  };

  render() {
    const {title, button} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {button ? (
          <TouchableOpacity onPress={this.returnToRepos}>
            <Icon name="chevron-left" size={16} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.left} />
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);
