const NoResultsDiv = () => {
  return (
    <div className='no-results'>
        <img src="icons/no-result.svg" alt="" className="icon" />
        <h3 className='title'>Something went wrong</h3>
        <p className="message">Enter a valid city or try again later.</p>
    </div>
  );
}

export default NoResultsDiv;