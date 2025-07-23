import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DetailBoard() {
    const { id } = useParams(); // URL에서 id 추출
    const [detailPost, setDetailPost] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/board/${id}`);
                console.log(res)
                setDetailPost(res.data);
            } catch (error) {
                console.error('데이터 가져오기 실패: ', error)
            }
        };

        fetchData();
    }, [id]);

    const handleDeleteBoard = async () => {
        const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
        if (!confirmDelete) return;

        try {
            const res = await axios.delete('http://127.0.0.1:8000/api/board/delete/', {
                data: { id }
            });

            console.log('글 삭제 성공: ', res.data)
            navigate('/board'); // 목록 페이지로 이동
        } catch (error) {
            console.error('글 삭제 실패: ', error)
        }
    };

    if (!detailPost) return <div>로딩 중...</div>;

    return (
        <div>
            <div key={detailPost.id}>
                <button onClick={() => navigate(`/board`)}>홈</button>
                <button onClick={() => navigate(`/board/update/${detailPost.id}`)}>글 수정</button>
                <button onClick={handleDeleteBoard}>글 삭제</button>
                <h1>{detailPost.title}</h1>
                <span>{detailPost.content}</span>
            </div>
        </div>
    );
}

export default DetailBoard;