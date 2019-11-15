import React from 'react';
import { Box } from 'rebass';
import { Tiles } from '@rebass/layout';
import CharacterItemComponent from './Character-item-component';
import { LinkWrapper } from '../common/Containers';
import ButtonSW from '../common/ButtonSW';

const CharactersComponent = ({ allPeople, loadMoreCharacters }) => {
  return (
    <Box mt={[1, 3, 5]} width="100%">
      <Tiles columns={[1, 2, 3]} m={5}>
        {allPeople.edges.map(({ node: person }) => (
          <LinkWrapper
            key={person.id}
            to={`/characters/${person.id}`}
            id={person.id}
            m={[1, 2, 3]}
          >
            <CharacterItemComponent
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
              sx={theme => ({
                color: theme.fontColor,
                backgroundColor: theme.cardBackground,
              })}
            />
          </LinkWrapper>
        ))}
      </Tiles>
      <Box mx="40%" pb={5}>
        <ButtonSW onClick={loadMoreCharacters}>Load More</ButtonSW>
      </Box>
    </Box>
  );
};

export default CharactersComponent;
