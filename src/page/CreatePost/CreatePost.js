import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import Nav from '../../components/Profile/Nav/Nav'
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const [selectedOptions, setSelectedOptions] = useState([]);

    // Xử lý sự kiện thay đổi lựa chọn
    const handleOptionChange = (option) => {

        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://agiletech-test-api.zeabur.app/posts/tags`;
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
                setTags(data);
            } catch (error) {
                console.log('Failed to fetch post list: ', error);
            }
        };

        fetchData();
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();

        // Tạo một đối tượng post mới từ giá trị của form
        const newPost = {
            title: title,
            description: description,
            tags:  selectedOptions ,
        };
        // Gửi newPost đến API hoặc xử lý theo yêu cầu của bạn
        fetch('https://agiletech-test-api.zeabur.app/posts', {
            method: 'POST',
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
                selectedOptions([])
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
        <div className='create'>
            <Nav />
            <div className='create_form'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                    </label>
                    <br />
                    <input className='input_create' type="text" value={title} onChange={handleTitleChange} />
                    <br />
                    <label>
                        Description:
                    </label>
                    <br />
                    <textarea className='input_create' value={description} onChange={handleDescriptionChange} />
                    <br />
                    <label>
                        Tags:
                    </label>
                    <br />
                    <select
                        multiple
                        value={selectedOptions}
                        onChange={(e) => handleOptionChange(e.target.value)}
                    >
                        {tags&&tags.map((e,i)=> 
                            ( <option key={i} value={e}>{e}</option>)
                        )}
                    </select>
                    <br />
                    <button className='btn_them' type="submit">Thêm</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost