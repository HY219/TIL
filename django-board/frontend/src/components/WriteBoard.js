import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WriteBoard() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/board/write/', {
                title,
                content
            });
            console.log('글 작성 성공: ', res.data)
            navigate('/board'); // 목록 페이지로 이동
        } catch (error) {
            console.error('글 작성 실패: ', error)
        }
    };

    return (
        <>
            <button onClick={handleSubmit}>글 작성 완료</button>
            <div>
                <input type='text' placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
                <br />
            </div>
        </>
    );
}

export default WriteBoard;