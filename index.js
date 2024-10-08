// code your solution here

function superbowlWin(records) {
    // Use find() to locate the object where the result is "W"
    const winningRecord = records.find(record => record.result === "W");
    
    // If a win is found, return the year, otherwise return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  