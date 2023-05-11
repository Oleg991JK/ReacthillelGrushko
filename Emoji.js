import cool from './smiles/cool.jpg'
import dead from './smiles/dead.png'
import happy from './smiles/happy.png'
import { useState } from 'react';
import './Emoji.css'
import Emoji from './Votes';

const emoji = [
    { id: 1, image: cool, votes: 1 },
    { id: 2, image: dead, votes: 3 },
    { id: 3, image: happy, votes: 5 }
  ];

     function Vote() {
        const [emojiList, setEmojiList] = useState(emoji);
        const [showFilteredEmoji, setShowFilteredEmoji] = useState(false);

  
        const filterAndShowEmoji = () => {
            const maxVotes = Math.max(...emojiList.map((emoji) => emoji.votes));
            const filteredEmoji = emojiList.filter((emoji) => emoji.votes === maxVotes);
            return filteredEmoji;
          };
        const handleFilterClick = () => {
            setShowFilteredEmoji(true);
          };

          const handleVote = (id) => {
            const updatedEmojiList = emojiList.map((emoji) => {
              if (emoji.id === id) {
                return {
                  ...emoji,
                  votes: emoji.votes + 1,
                };
              }
              return emoji;
            });
            setEmojiList(updatedEmojiList);
          };
          
        return (
            <div>
                <h2>Vote for the best Smile</h2>
                <ul>{emojiList.map(({ id, image, votes }) => (
          <Emoji
            key={id}
            id={id}
            image={image}
            votes={votes}
            handleVote={handleVote}
          />
        ))}</ul>
             <button className='resultButton' onClick={handleFilterClick}>Show Filtered Emoji</button>
             {showFilteredEmoji && (
        <div>
          <h3>Emoji with Most Votes:</h3>
          <ul className='result'>
            {filterAndShowEmoji().map(({ id, image, votes }) => (
              <Emoji key={id} id={id} image={image} votes={votes} />
            ))}
          </ul>
        </div>
      )}

    </div>

        )
    }

    export default Vote;
    