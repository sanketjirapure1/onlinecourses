import {Row, Col, Carousel} from 'react-bootstrap';
import CourseCard from '../Courses/CourseCard';

const Home = () => {
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
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/assets/baner-2.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/assets/online-training-and-courses1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/assets/create-videos-online3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid">
        <div className="mt-4">
          <h1>Get Certified, Get Ahead with Our Programs</h1>

          <h4>
            Learn from global experts and get certified by the world's leading
            universities
          </h4>
        </div>

        <Row className="mt-4">
          {courses.map((course, index) => (
            <Col md={3} key={index}>
              <CourseCard {...course} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
