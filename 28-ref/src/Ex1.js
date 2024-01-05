import { useState, useRef } from 'react';

const Practice1 = () => {
  const writerRef = useRef();
  const titleRef = useRef();

  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState('writer'); // writer or title

  const [comment, setComment] = useState([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ]);

  const addComment = () => {
    if (writerRef.current.value === '') return writerRef.current.focus();
    if (titleRef.current.value === '') return titleRef.current.focus();
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    // state 추가
    setComment([...comment, newComment]);

    // // input 초기화
    setInputWriter('');
    setInputTitle('');
  };

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      console.log(item); // comment에 대한 각 원소(객체)
      console.log(item[searchType]); // 검색 조건(key: searchType)에 대한 value 값 -> 민수, 지민, 희수
      console.log(item[searchType].includes(inputSearch)); // true or false

      // 검색결과 없음; null 반환
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }

      // 검색결과 있음; 검색결과(배열) 반환
      return item;
    });

    // 검색 결과 state 설정
    setResult(searchResult);
    setInputSearch('');
  };

  const selectSearchType = (e) => {
    // console.log(e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          ref={writerRef}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목: </label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          ref={titleRef}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>

      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table border={1} style={{ marginTop: '30px', width: '500px' }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default Practice1;
