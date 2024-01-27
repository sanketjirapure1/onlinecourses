import {Card} from 'react-bootstrap';

const CourseCard = ({title, description, imageSrc,instructor, price}) => {
  return (
    <Card
      className="course-card"
      style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title className='titlecss'>{title}</Card.Title>
        <Card.Text className='descriptioncss'>{description}</Card.Text>
        <Card.Text className='instructcss'>{instructor}</Card.Text>
        <Card.Text className='pricecss'>₹{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
