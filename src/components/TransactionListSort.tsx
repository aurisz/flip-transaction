import * as React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useAtom } from 'jotai';

import { sortAtom } from '@store/index';
import RadioButton from './RadioButton';

const sortOptions = [
  {
    label: 'URUTKAN',
    value: 'id|desc',
  },
  {
    label: 'Nama A-Z',
    value: 'beneficiaryName|asc',
  },
  {
    label: 'Nama Z-A',
    value: 'beneficiaryName|desc',
  },
  {
    label: 'Tanggal Terbaru',
    value: 'createdAt|desc',
  },
  {
    label: 'Tanggal Terlama',
    value: 'createdAt|asc',
  },
];

const TransactionListSort = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState(sortOptions[0]);
  const [, setSortTransactions] = useAtom(sortAtom);

  const handleSelectSort = selected => {
    setSelectedSort(selected);
    setSortTransactions(selected.value);
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

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 20,
  },
  button: {
    padding: 10,
    height: 50,
    backgroundColor: '#ffffff',
    color: 'orange',
    justifyContent: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sortIcon: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 10,
    paddingLeft: 3,
  },
});

export default TransactionListSort;
