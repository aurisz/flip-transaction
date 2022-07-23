import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import { useAtom } from 'jotai';

import { sortAtom } from '@store/index';
import RadioButton from '@components/RadioButton';
import Popup from '@components/Popup';
import constants from '@constants/index';
import styles from './TransactionListSort.styles';

import type { OnSelectSort } from './TransactionListSort.types';

const { sortOptions } = constants;

const TransactionListSort = () => {
  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [selectedSort, setSelectedSort] = useAtom(sortAtom);

  const handleSelectSort: OnSelectSort = selected => {
    setSelectedSort(selected);
    setPopupVisible(!isPopupVisible);
  };

  const handleTogglePopup = () => setPopupVisible(!isPopupVisible);

  return (
    <React.Fragment>
      <Popup isVisible={isPopupVisible} onClose={handleTogglePopup}>
        <RadioButton
          options={sortOptions}
          selected={selectedSort}
          onSelect={handleSelectSort}
        />
      </Popup>
      <Pressable style={styles.sortButton} onPress={handleTogglePopup}>
        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>{selectedSort.label}</Text>
          <Text style={styles.sortIcon}>▼</Text>
        </View>
      </Pressable>
    </React.Fragment>
  );
};

export default TransactionListSort;
