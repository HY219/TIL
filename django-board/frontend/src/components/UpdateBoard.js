import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBoard() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    // 기존 게시글 데이터 불러오기
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/board/${id}`);
                setTitle(res.data.title);
                setContent(res.data.content);
            } catch (error) {
                console.error('게시글 불러오기 실패: ', error);
            }
        };

        fetchDetail();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const res = await axios.put('http://127.0.0.1:8000/api/board/update/', {
                id,
                title,
                content
            });
            alert("수정이 완료되었습니다.")
            console.log('글 수정 성공: ', res.data)
            navigate(`/board/${id}`); // 목록 페이지로 이동
        } catch (error) {
            console.error('글 수정 실패: ', error)
        }
    };

    return (
        <>
            <button onClick={handleSubmit}>글 수정 완료</button>
            <div>
                <input type='text' placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
                <br />
            </div>
        </>
    );
}

export default UpdateBoard;