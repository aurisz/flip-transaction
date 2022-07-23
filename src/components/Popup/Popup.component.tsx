import * as React from 'react';
import { Modal, View } from 'react-native';

import styles from './Popup.styles';

import type { Props } from './Popup.types';

const Popup = ({ children, isVisible, onClose }: Props) => (
  <Modal
    animationType="fade"
    transparent
    statusBarTranslucent
    hardwareAccelerated
    visible={isVisible}
    onRequestClose={onClose}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>{children}</View>
    </View>
  </Modal>
);

export default Popup;
