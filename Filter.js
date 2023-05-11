function Vote() {
    const [emojiList, setEmojiList] = useState(emoji);
  
    const filterAndShowEmoji = () => {
      const sortedEmoji = [...emojiList].sort((a, b) => b.votes - a.votes);
      const emojiWithMostVotes = sortedEmoji[0];
      return emojiWithMostVotes;
    };