import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Board() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/board');
                console.log(res)
                setPosts(res.data);
            } catch (error) {
                console.error('데이터 가져오기 실패: ', error)
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <button onClick={() => navigate('/board/write')}>글쓰기</button>
            <div>
                {posts.map(item => (
                    <div key={item.id} onClick={() => navigate(`/board/${item.id}`)}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Board;