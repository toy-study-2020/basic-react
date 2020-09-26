import React from 'react';

const Birth = ({ type, check })  => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const listYear = [];
  const listMonth = [];
  const listDay = [];

  for (let y = 1900; y <= currentYear; y++) {
    listYear.push(y);
  }

  for (let m = 1; m <= 12; m++) {
    listMonth.push(m);
  }

  for (let d = 1; d <= 31; d++) {
    listDay.push(d);
  }
  return (
    <>
      <label className="year" aria-label="출생 연도 선택">
        <select name="year" onChange={check}>
          <option value={`${type.DEFAULT}`}>선택</option>
          {listYear && listYear.map((y) =>
            <option
              key={y}
              value={y}>
              {y}
            </option>
          )}
        </select>
      </label>
      <label className="month" aria-label="출생 달 선택">
        <select name="month" onChange={check}>
          <option value={`${type.DEFAULT}`}>선택</option>
          {listMonth && listMonth.map((m) =>
            <option
              key={m}
              value={m}>
              {m}
            </option>
          )}
        </select>
      </label>
      <label className="day" aria-label="태어난 날짜 선택">
        <select name="day" onChange={check}>
          <option value={`${type.DEFAULT}`}>선택</option>
          {listDay && listDay.map((d) =>
            <option
              key={d}
              value={d}>
              {d}
            </option>
          )}
        </select>
      </label>
    </>
  );
}

export default Birth;
