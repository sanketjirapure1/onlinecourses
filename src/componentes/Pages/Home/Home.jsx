import {Row, Col, Carousel} from 'react-bootstrap';
import CourseCard from '../Courses/CourseCard';
import coursesData from '../../../courses.json';
const Home = () => {
  const courses = coursesData;
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
          <h1 className='homeheading'>Get Certified, Get Ahead with Our Programs</h1>

          <h4 className='secondheading'>
            Learn from global experts and get certified by the world's leading
            universities
          </h4>
        </div>

        <Row className="mt-4">
          {courses.map((course, index) => (
            <Col sm={6} md={4} xl={3} key={index}>
              <CourseCard {...course} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
