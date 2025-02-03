import { Button, Form } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
<Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue="The assignment is available online Submit a link to the landing page of"
          />
        </Form.Group>
        </Form>

        <Form.Group className="mb-3 d-flex align-items-center" controlId="wd-name">
  <Form.Label className="me-2 mb-0">Points</Form.Label>
  <Form.Control type="text" defaultValue="100" />
</Form.Group>

<Form.Group className="mb-3" controlId="wd-assign-group">
  <div className="d-flex align-items-center">
    <Form.Label className="me-3" style={{ width: "150px" }}>
      Assignment Group
    </Form.Label>
    <Form.Select defaultValue="ASSIGNMENT1" style={{ flex: 1 }}>
      <option value="ASSIGNMENT1">Assignment 1</option>
      <option value="ASSIGNMENT2">Assignment 2</option>
      <option value="ASSIGNMENT3">Assignment 3</option>
    </Form.Select>
  </div>
</Form.Group>


<Form.Group className="mb-3" controlId="wd-assign-group">
  <div className="d-flex align-items-center">
    <Form.Label className="me-3" style={{ width: "150px" }}>
      Display Grade As
    </Form.Label>
    <Form.Select defaultValue="PERCENTAGE" style={{ flex: 1 }}>
      <option value="PERCENTAGE">Percentage</option>
      <option value="DECIMAL">Decimal</option>
      <option value="LETTERS">Letters</option>
    </Form.Select>
  </div>
</Form.Group>


<Form.Group className="mb-3" controlId="wd-assign-group">
  <div className="d-flex align-items-start">
    <Form.Label className="me-3" style={{ width: "150px" }}>
      Submission Type
    </Form.Label>

    <div className="border p-3 rounded" style={{ flex: 1 }}>
      <Form.Select defaultValue="ONLINE" style={{ flex: 1 }}>
        <option value="ONLINE">Online</option>
        <option value="INPERSON">In Person</option>
      </Form.Select>

      <div className="mt-3">
        <b style={{ display: 'block', marginBottom: '10px'}}> Online Entry Option </b> 
        <div className="mb-3">
          <Form.Check 
            type="checkbox"
            id="checkbox1"
            label="Text Entry"
          />
        </div>
        <div className="mb-3">
          <Form.Check 
            type="checkbox"
            id="checkbox2"
            label="Website URL"
          />
        </div>
        <div className="mb-3">
          <Form.Check 
            type="checkbox"
            id="checkbox3"
            label="Media Recordings"
          />
        </div>
        <div className="mb-3">
          <Form.Check 
            type="checkbox"
            id="checkbox3"
            label="Student Annotation"
          />
        </div>
        <div className="mb-3">
          <Form.Check 
            type="checkbox"
            id="checkbox3"
            label="File Uploads"
          />
        </div>
      </div>
    </div>
  </div>
</Form.Group>


<Form.Group className="mb-3">
  <div className="d-flex align-items-start">
    <Form.Label className="me-3" style={{ marginBottom: "10px", width: "150px" }}>
      Assign
    </Form.Label>

    <div className="border p-3 rounded" style={{ flex: 1 }}>
      <div className="mb-3">
        <Form.Label className="fw-bold" style={{ marginBottom: "10px" }}>
          Assign to
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Everyone"
          title="Everyone"
          id="wd-assign-to"
        />
      </div>

      <div className="mb-3">
        <Form.Label className="fw-bold" style={{ marginBottom: "10px" }}>
          Due
        </Form.Label>
        <Form.Control
          type="date"
          id="wd-date"
          placeholder="mm-dd-yyyy"
          className="mb-2"
        />
      </div>

      <div className="d-flex">
  <div className="mb-3 me-3" style={{ flex: 1 }}>
    <Form.Label className="fw-bold" style={{ marginBottom: "10px" }}>
      Available from
    </Form.Label>
    <Form.Control
      type="date"
      id="wd-date"
      placeholder="mm-dd-yyyy"
      className="mb-2"
    />
  </div>

  <div className="mb-3" style={{ flex: 1 }}>
    <Form.Label className="fw-bold" style={{ marginBottom: "10px" }}>
      Until
    </Form.Label>
    <Form.Control
      type="date"
      id="wd-date"
      placeholder="mm-dd-yyyy"
      className="mb-2"
    />
  </div>
</div>

    </div>
  </div>
</Form.Group>

<Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       Save
     </Button>
     <Button variant="light" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       Cancel
     </Button>

      </div>
  );}
  




  