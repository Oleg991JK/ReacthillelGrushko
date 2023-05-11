import './Votes.css'

function Emoji({id, image, votes, handleVote}) {

    const addVote = () => {
        handleVote(id);
      };
    return (
        <li>
            <div>
                <img src={image} alt={id}/>
                <div className="votes">
                    <button className="voteButton" onClick={addVote}>Vote</button>
                    <p className='voteNumber'>{votes}</p>
                </div>
            </div>
        </li>
    )
}

export default Emoji;