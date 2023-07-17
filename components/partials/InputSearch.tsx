import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import SearchIcon from '../../assets/icons/SearchIcon';

function InputSearch({onSearch}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
    onSearch(query); // Pass the search query back to the parent component
  };

  return (
    <View style={styles.wrap}>
      <SearchIcon />
      <TextInput
        style={styles.input}
        placeholder="Cari disini"
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 18,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: '#F13B82',
  },
  input: {
    backgroundColor: '#F0F0F0',
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 14,
    borderRadius: 9,
    paddingVertical: 4,
    paddingHorizontal: 14,
    fontFamily: 'PlusJakartaSans-Medium',
  },
});

export default InputSearch;
