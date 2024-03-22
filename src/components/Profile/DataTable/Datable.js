import React, { useEffect, useState } from 'react'
import './Datable.css'
import { Link, useNavigate } from 'react-router-dom'
import edit from '../../../assets/imgs/edit.png'


function Datable() {
    const [posts, setPosts] = useState([]);


    const [filter, setFilter] = useState({
        page: 1,
        title: '',
        tag: ''
    })
    const handleTitle = (e) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            title: e.target.value
        }))
    }
    const handleTags = (e) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            tag: e.target.value
        }))
    }
    const handlePatination = (index) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            page:index
        }))
    }
    const [obj, setObj] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://agiletech-test-api.zeabur.app/posts?page=${filter.page}`;
                if (filter.title.length > 0 && filter.tag>0) {
                    url = `https://agiletech-test-api.zeabur.app/posts?page=${filter.page}&title=${filter.title}&tags=${filter.tag}`;
                } else if(filter.title.length > 0 && filter.tag<=0) {
                    url = `https://agiletech-test-api.zeabur.app/posts?page=${filter.page}&title=${filter.title}`;
                } else {
                    url = `https://agiletech-test-api.zeabur.app/posts?page=${filter.page}&tags=${filter.tag}`;
                }
                const response = await fetch(
                    url,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                    }
                );
                const data = await response.json();
                setPosts(data.posts); // Cập nhật state posts với dữ liệu từ API
                setObj(data);
                console.log('Fetch post successfully: ', data);
            } catch (error) {
                console.log('Failed to fetch post list: ', error);
            }
        };

        fetchData();
    }, [filter]);

    const handleDelete = (i) => {
        // Gửi yêu cầu DELETE đến API
        fetch(`https://agiletech-test-api.zeabur.app/posts/${i}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                window.location.reload();
            })
            .catch((error) => {

                console.error('Error:', error);
            });
    };
    return (
        <div className='datable'>
            <div className='datable_nav'>
                <Link className='btn_create' to={'/create'}>Add new</Link>
                <div>
                    <input onChange={handleTitle} placeholder='title'></input>
                    <input onChange={handleTags} placeholder='tag'></input>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th className='w1'>Title</th>
                        <th className='w1'>Description</th>
                        <th className='w1'>Tag</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, i) => (
                        <tr key={post.id}>
                            <td>{i + 1}</td>
                            <td className='w1'>{post.title}</td>
                            <td className='w1'>{post.description}</td>
                            <td className='w1'>{post.tags.join(',')}</td>
                            <td className='action'>
                                <Link to={`/edit/${post.id}`} className='edit'>
                                    <img src={edit} alt='edit'></img>
                                </Link>
                                <button onClick={e => handleDelete(post.id)} className='delete'>

                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className='patination'>
                {Array.from({ length: obj.total_page }, (_, index) => (
                    <li key={index} onClick={e=>handlePatination(index+1)}> 
                       {index + 1}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Datable