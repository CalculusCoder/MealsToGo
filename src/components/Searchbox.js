import * as React from "react";
import { useState } from "react";
import { Searchbar } from "react-native-paper";

const Searchbox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Searchbox;
