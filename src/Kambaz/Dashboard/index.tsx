import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">CS1234 React JS </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/Course2.png" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">ARTD1235 Design Degree Project </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Design Capstone</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/Course3.png" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">ARTD1236 Indentity & Branding </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Brand Design</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/Course4.png" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">PSYC1237 Cross Cultural Psychology </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Cross Cultural Psychology</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/Course5.png" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">JAP1238 Elementary Japanese </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Japanese 1</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/Course6.png" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">PHIL1239 Philosophy </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Philosophy of Emotion</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/Course7.png" width={200} />
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title">STRAT1240 Strategy & Action </Card.Title>
            <Card.Text  className="wd-dashboard-course-description">Strategy & Action</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        </Row>
      </div>
    </div>
);}
