import React, { useState, CSSProperties, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { boardData } from '../../data/boardData';

type BoardItem = {
    id: number,
    title: string,
    author: string,
    date: string,
}

const BoardList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchOption, setSearchOption] = useState<string>('title');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<BoardItem[]>(boardData);

    const postsPerPage = 10; // 페이지 당 10개의 게시물로 설정

    useEffect(() => {
        // 초기 상태를 설정합니다.
        setFilteredItems(boardData);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPage(Number(e.currentTarget.id));
    };

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchOption(e.target.value);
    };

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const filtered = boardData.filter(item => {
            if (searchOption === 'title') {
                return item.title.includes(searchTerm);
            } else if (searchOption === 'author') {
                return item.author.includes(searchTerm);
            } else if (searchOption === 'date') {
                return item.date.includes(searchTerm);
            }
            return false;
        });
        setFilteredItems(filtered);
        setCurrentPage(1); // 검색 시 첫 페이지로 이동
    };

    const totalPages = Math.ceil(filteredItems.length / postsPerPage);
    const indexOfLastItem = currentPage * postsPerPage;
    const indexOfFirstItem = indexOfLastItem - postsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const containerStyle: CSSProperties = {
        padding: '20px'
    };

    const tableContainerStyle: CSSProperties = {
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        marginBottom: '20px'
    };

    const tableStyle: CSSProperties = {
        width: '100%',
        borderCollapse: 'collapse'
    };

    const thStyle: CSSProperties = {
        border: '1px solid #ddd',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        textAlign: 'left'
    };

    const tdStyle: CSSProperties = {
        border: '1px solid #ddd',
        padding: '8px'
    };

    const linkStyle: CSSProperties = {
        textDecoration: 'none',
        color: 'inherit'
    };

    const paginationStyle: CSSProperties = {
        marginTop: '20px',
        textAlign: 'center'
    };

    const buttonStyle: CSSProperties = {
        margin: '0 5px',
        padding: '5px 10px',
        cursor: 'pointer'
    };

    const activeButtonStyle: CSSProperties = {
        ...buttonStyle,
        backgroundColor: '#007bff',
        color: 'white'
    };

    const searchContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f2f2f2',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={tableContainerStyle}>
                <h2>게시판 목록</h2>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Post ID</th>
                            <th style={thStyle}>제목</th>
                            <th style={thStyle}>작성자</th>
                            <th style={thStyle}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((v) => (
                            <tr key={v.id}>
                                <td style={tdStyle}>{v.id}</td>
                                <td style={tdStyle}>
                                    <Link to={`/board/${v.id}`} style={linkStyle}>{v.title}</Link>
                                </td>
                                <td style={tdStyle}>{v.author}</td>
                                <td style={tdStyle}>{v.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={paginationStyle}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            id={(index + 1).toString()}
                            onClick={handleClick}
                            style={currentPage === index + 1 ? activeButtonStyle : buttonStyle}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div style={searchContainerStyle}>
                <label style={{ marginRight: '10px' }}>
                    검색 항목:
                    <select value={searchOption} onChange={handleOptionChange} style={{ marginLeft: '5px' }}>
                        <option value="title">제목</option>
                        <option value="author">작성자</option>
                        <option value="date">날짜</option>
                    </select>
                </label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder={`${searchOption} 검색`}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleSearch}>검색</button>
            </div>
        </div>
    );
};

export default BoardList;