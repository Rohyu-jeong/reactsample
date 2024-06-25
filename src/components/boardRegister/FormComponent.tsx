import React, { useState, CSSProperties } from 'react';

const FormComponent = () => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // 등록 버튼 클릭 시 처리할 로직 추가
        console.log({ author, content, password });
    };

    const handleCancel = () => {
        // 취소 버튼 클릭 시 처리할 로직 추가
        setAuthor('');
        setContent('');
        setPassword('');
    };

    const containerStyle: CSSProperties = {
        width: '95%',
        padding: '40px 70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const formStyle: CSSProperties = {
        width: '100%',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputGroupStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    };

    const labelStyle: CSSProperties = {
        width: '20%',
        textAlign: 'left',
        fontWeight: 'bold',
    };

    const inputStyle: CSSProperties = {
        width: '75%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const textAreaStyle: CSSProperties = {
        width: '75%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        height: '200px',
    };

    const buttonGroupStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
    };

    const buttonStyle: CSSProperties = {
        padding: '10px 20px',
        margin: '0 5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const registerButtonStyle: CSSProperties = {
        ...buttonStyle,
        backgroundColor: '#007bff',
        color: 'white',
    };

    const cancelButtonStyle: CSSProperties = {
        ...buttonStyle,
        backgroundColor: '#6c757d',
        color: 'white',
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>작성자</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>작성내용</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        style={textAreaStyle}
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>비밀번호</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div style={buttonGroupStyle}>
                    <button onClick={handleRegister} style={registerButtonStyle}>등록</button>
                    <button onClick={handleCancel} style={cancelButtonStyle}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;