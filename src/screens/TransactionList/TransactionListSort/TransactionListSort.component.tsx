import * as React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { useAtom } from 'jotai';

import { sortAtom } from '@store/index';
import RadioButton from '@components/RadioButton';
import constants from '@constants/index';
import styles from './TransactionListSort.styles';

import type { SortOption } from '@customTypes/index';
import type { OnSelectSort } from './TransactionListSort.types';

const { sortOptions } = constants;
const defaultSortOption = sortOptions[0];

const TransactionListSort = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState(defaultSortOption);
  const [, setSortTransactions] = useAtom(sortAtom);

  const handleSelectSort: OnSelectSort = selected => {
    const selectedValue = selected.value as SortOption;

    setSelectedSort(selected);
    setSortTransactions(selectedValue);
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent
        statusBarTranslucent
        hardwareAccelerated
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RadioButton
              options={sortOptions}
              selected={selectedSort}
              onSelect={handleSelectSort}
            />
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>{selectedSort.label}</Text>
          <Text style={styles.sortIcon}>&#x25BC;</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TransactionListSort;
