import {Row, Col} from 'react-bootstrap';
import CourseCard from './CourseCard';
const AiDevelopments = () => {
  const courses = [
    {
      title: 'React.js',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin1.jpeg',
      price: 3500,
    },
    {
      title: 'HTML/CSS',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin2.jpeg',
      price: 3500,
    },
    {
      title: 'FullStack',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin1.jpeg',
      price: 3500,
    },
    {
      title: 'Javascript',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin3.jpeg',
      price: 3500,
    },
    {
      title: 'Python',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin4.jpeg',
      price: 3500,
    },
    {
      title: 'Java',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin5.jpeg',
      price: 3500,
    },
    {
      title: 'BigData ',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin6.jpeg',
      price: 3500,
    },
    {
      title: 'MongoDB',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin1.jpeg',
      price: 3500,
    },
    {
      title: 'Node.js',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin2.jpeg',
      price: 3500,
    },
    {
      title: 'Android',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin3.jpeg',
      price: 3500,
    },
    {
      title: '.NET',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin6.jpeg',
      price: 3500,
    },
    {
      title: 'C#',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin4.jpeg',
      price: 3500,
    },
    {
      title: 'C++',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin1.jpeg',
      price: 3500,
    },
    {
      title: 'Sql',
      description: 'Description of the course. Lorem ipsum dolor .',
      imageSrc:
        '/src/assets/aimachin3.jpeg',
      price: 3500,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="mt-4">
        <h1>All AI / Machin Learning Development Courses</h1>
        <h4>Explore a world of knowledge with our diverse range of courses.</h4>
      </div>

      <Row className="mt-4">
        {courses.map((course, index) => (
          <Col md={3} key={index}>
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AiDevelopments;
