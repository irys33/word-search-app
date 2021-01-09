
function WordTable({tableList=[], onClick}) {
    return (
      <div>
        {tableList.map((row, ridx) =>
            <div  key={ridx}>
              {row.map((cal, cidx) => <button className="square" key={`${ridx}-${cidx}`}> {cal} </button> )}
            </div>
        )}
      </div>
    );
}

export default WordTable;
