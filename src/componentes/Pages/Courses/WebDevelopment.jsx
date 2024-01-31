import {Row, Col} from 'react-bootstrap';
import CourseCard from './CourseCard';
// import coursesData from '../../../courses.json'; 
const WebDevelopment = () => {
  const courses = [
    {
      title: 'React.js',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'HTML/CSS',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'FullStack',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'Javascript',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'Python',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'Java',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'BigData ',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'MongoDB',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'Node.js',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'Android',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: '.NET',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'C#',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'C++',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
    {
      title: 'Sql',
      description: 'Description of the course. Lorem ipsum dolor .',
      instructor: 'hitesh chaudhary',
      imageSrc:
        '/src/assets/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.png',
      price: 3500,
    },
  ];
  // const courses = coursesData;
  return (
    <div className="container-fluid">
      <div className="mt-4">
        <h1>All Web Development Courses</h1>
        <h4>Explore a world of knowledge with our diverse range of courses.</h4>
      </div>

      <Row className="mt-4">
        {courses.map((course, index) => (
          <Col sm={6} md={4} xl={3} key={index}>
          {/* // <Col md={3} key={index}> */}
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WebDevelopment;
