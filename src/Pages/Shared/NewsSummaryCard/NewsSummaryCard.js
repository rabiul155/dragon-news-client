import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, total_view, rating, details, image_url } = news;


    return (
        <Card className="mb-3">
            <Card.Header className=' d-flex justify-content-between align-items-center'>
                <div className=' d-flex '>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: '50px' }}
                    ></Image>
                    <div className='ms-2'>
                        <p className='m-0'>{author?.name}</p>
                        <p className='m-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-1'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <> {details.slice(0, 250) + '....'}<Link to={`/news/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className=' text-warning me-1 pb-1'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className=' pb-1 fs-5'></FaEye>
                    <span className='ms-1'> {total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;