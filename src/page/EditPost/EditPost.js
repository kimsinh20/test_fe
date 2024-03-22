import React, { useEffect, useState } from 'react'
import './EditPost.css'
import Nav from '../../components/Profile/Nav/Nav'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
               
            } catch (error) {
                console.log('Failed to fetch post list: ', error);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate();
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // Tạo một đối tượng post mới từ giá trị của form
        const newPost = {
            title: title,
            description: description,
            tags: tags.length > 0 ? tags.split(',').map((tag) => tag.trim()) : [],
        };

        // Gửi newPost đến API hoặc xử lý theo yêu cầu của bạn
        fetch(`https://agiletech-test-api.zeabur.app/posts/${id}`, {
            method: 'PATCH',
            headers: {
                 Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then((response) => response.json())
            .then((data) => {
                
                navigate('/profile')
                // Đặt lại giá trị của form sau khi gửi dữ liệu thành công
                setTitle('');
                setDescription('');
                setTags('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // Đặt lại giá trị của form sau khi gửi dữ liệu
        setTitle('');
        setDescription('');
        setTags('');
    };
    return (
        <div className='edit'>
            <Nav />
            <div className='edit_form'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                    </label>
                    <br />
                    <input className='input_edit' type="text" value={title} onChange={handleTitleChange} />
                    <br />
                    <label>
                        Description:
                    </label>
                    <br />
                    <textarea className='input_edit' value={description} onChange={handleDescriptionChange} />
                    <br />
                    <label>
                        Tags:
                    </label>
                    <br />
                    <input className='input_edit' type="text" value={tags} onChange={handleTagsChange} />
                    <br />
                    <button className='btn_them' type="submit">Cập nhật</button>
                </form>
            </div>
        </div>
    )
}

export default EditPost