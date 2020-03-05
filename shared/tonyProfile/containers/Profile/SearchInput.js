import React from 'react';
import {
  SearchIcon,
  SearchWrapper,
  Input,
} from './SearchInput.style';
import SearchSvg from './10-icon.svg';

export default function SearchInput({
  searchInput,
  setSearchInput,
}) {
  
  return (
    <SearchWrapper>
      <SearchIcon src={SearchSvg} />
      <Input
        type="search"
        placeholder="Search ..."
        value={searchInput}
        onChange={setSearchInput}
      />
    </SearchWrapper>
  );
}
