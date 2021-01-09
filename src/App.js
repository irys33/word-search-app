import React from 'react';
import Button from '@material-ui/core/Button';

import WordTable from './wordTable';
import WordForm from './wordForm';

function App() {
  var appHeaderStyle = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }
  const [value, setValue] = React.useState('ネコ\nイヌ');
  const [table, setTable] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const isEmpty = (direction, table, startPos, endPos) => {
    const [start, end] = direction === 0 ? [startPos.x, endPos.x] : [startPos.y, endPos.y]
    for (let i = start; i < end; i++){
      const [y, x] = direction === 0 ? [startPos.y, i] : [i, startPos.x]
      if (table[y][x] != "　") return false
    }
    return true
  }

  const insertWord = (table, word, direction, startPos)=> {
    for (let i = 0; i < word.length; i++){
        const [y, x] = direction === 0 ? [startPos.y, i+startPos.x] : [i+startPos.y, startPos.x]
        table[y][x] = word[i];
    }
  }

  const generateTable = (value, size) => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }    

    function getRandomKatakana() {
      const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
      return katakana[Math.floor(Math.random()*katakana.length)];
    }

    // 初期化
    var table = new Array(size);
    for(let y = 0; y < size; y++) {
      table[y] = new Array(size).fill("　");
    }

    const [TABLE_WIDTH, TABLE_HEIGHT] = [table[0].length, table.length]
    const REPEAT_NUM = 10

    const wordList = value.split("\n")

    wordList.map(word => {
      if (false) {
        // TODO 文字が重なっていたら, 重ねて挿入できるかを試す.
      } else {
        let insert_end_flag = 0
        while (insert_end_flag < REPEAT_NUM){
          const startPos = {x: getRandomInt(table.length), y: getRandomInt(table.length)}
          insert_end_flag += 1
          const direction = getRandomInt(2) // 0: 横 1: 縦

          const endPos = direction === 0 ? {x: startPos.x + word.length, y: startPos.y} : {x: startPos.x, y: startPos.y + word.length}

          // endPosが範囲外だったらbreak
          // endPosまで直線に探索して, 空文字列以外入ってたらbreak
          if (direction === 0){
            if (endPos.x >= TABLE_WIDTH){
              continue
            } else if (!isEmpty(direction, table, startPos, endPos)) {
              continue
            }
          } else {
            if (endPos.y >= TABLE_HEIGHT){
              continue
            } else if (!isEmpty(direction, table, startPos, endPos)) {
              continue
            }
          }

          // wordの代入
          insertWord(table, word, direction, startPos)
          break
        }
      }
    })

    table = table.map(
      row => row.map(
        i => i === "　" ? getRandomKatakana() : i
      )
    )
    
    setTable(table);
    
  }

  return  (
    <div style={{textAlign: "center"}}>
      <div style={appHeaderStyle}>
        <WordForm value={value} handleChange={handleChange} />
        {/* TODO サイズを入力できるようにする */}
        <Button variant="contained" onClick={() => generateTable(value, 6)}>生成</Button>
        <WordTable tableList={table} />
      </div>
    </div>
  );
}

export default App;
