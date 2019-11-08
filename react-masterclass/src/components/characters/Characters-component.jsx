import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from 'rebass';
import { Tiles } from '@rebass/layout';
import CharacterItemComponent from './Character-item-component';
import ButtonSW from '../common/ButtonSW'

const CharactersComponent = ({ allPeople, loadMoreCharacters }) => {
  return (
    <Box mt={[1, 3, 5]} width="100%">
      <Tiles columns={[1, 2, 3]} padding="4">
        {allPeople.edges.map(({ node: person }) => (
          <Link
            as={RouterLink}
            variant="nav"
            key={person.id}
            to={`/characters/${person.id}`}
            id={person.id}
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
          </Link>
        ))}
      </Tiles>
      <Box mx="40%" pb={5}>
        <ButtonSW onClick={loadMoreCharacters}>Load More</ButtonSW>
      </Box>
    </Box>
  );
};

export default CharactersComponent;
