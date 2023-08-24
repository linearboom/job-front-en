import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";

const EduBlock = ({ userDate, setUserData }) => {
  const [editing, setEditing] = useState({
    degree: false,
    higherSchool: false,
    secondarySchool: false,
  });

  const [degreeDetails, setDegreeDetails] = useState({
    degree: "",
    state: "",
    year: "",
  });

  const [higherSchoolDetails, setHigherSchoolDetails] = useState({
    school: "",
    state: "",
    year: "",
  });

  const [secondarySchoolDetails, setSecondarySchoolDetails] = useState({
    school: "",
    state: "",
    year: "",
  });

  const handleEditClick = (section) => {
    setEditing((prevState) => ({
      ...prevState,
      [section]: true,
    }));
  };

  const handleSaveClick = (section) => {
    setEditing((prevState) => ({
      ...prevState,
      [section]: false,
    }));
    // Save logic for the specific section can be added here
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Education Details</Card.Title>
        <hr />

        {/* Degree Details */}
        {editing.degree ? (
          <Form>
            <Form.Group controlId="degree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                value={degreeDetails.degree}
                onChange={(e) =>
                  setDegreeDetails({
                    ...degreeDetails,
                    degree: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="degreeState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={degreeDetails.state}
                onChange={(e) =>
                  setDegreeDetails({
                    ...degreeDetails,
                    state: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="degreeYear">
              <Form.Label>Year of Completion</Form.Label>
              <Form.Control
                type="text"
                value={degreeDetails.year}
                onChange={(e) =>
                  setDegreeDetails({
                    ...degreeDetails,
                    year: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" onClick={() => handleSaveClick("degree")}>
              Save
            </Button>
          </Form>
        ) : (
          <>
            <Card.Text>Degree: {degreeDetails.degree}</Card.Text>
            <Card.Text>State: {degreeDetails.state}</Card.Text>
            <Card.Text>Year of Completion: {degreeDetails.year}</Card.Text>
            <Button variant="link" onClick={() => handleEditClick("degree")}>
              <FaPencilAlt />
            </Button>
          </>
        )}

        <hr />

        {/* Higher School Details */}
        {editing.higherSchool ? (
          <Form>
            <Form.Group controlId="higherSchool">
              <Form.Label>Higher School</Form.Label>
              <Form.Control
                type="text"
                value={higherSchoolDetails.school}
                onChange={(e) =>
                  setHigherSchoolDetails({
                    ...higherSchoolDetails,
                    school: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="higherSchoolState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={higherSchoolDetails.state}
                onChange={(e) =>
                  setHigherSchoolDetails({
                    ...higherSchoolDetails,
                    state: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="higherSchoolYear">
              <Form.Label>Year of Completion</Form.Label>
              <Form.Control
                type="text"
                value={higherSchoolDetails.year}
                onChange={(e) =>
                  setHigherSchoolDetails({
                    ...higherSchoolDetails,
                    year: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => handleSaveClick("higherSchool")}
            >
              Save
            </Button>
          </Form>
        ) : (
          <>
            <Card.Text>Higher School: {higherSchoolDetails.school}</Card.Text>
            <Card.Text>State: {higherSchoolDetails.state}</Card.Text>
            <Card.Text>Year: {higherSchoolDetails.year}</Card.Text>
            <Button
              variant="link"
              onClick={() => handleEditClick("higherSchool")}
            >
              <FaPencilAlt />
            </Button>
          </>
        )}

        <hr />

        {/* Secondary School Details */}
        {editing.secondarySchool ? (
          <Form>
            <Form.Group controlId="secondarySchool">
              <Form.Label>Secondary School</Form.Label>
              <Form.Control
                type="text"
                value={secondarySchoolDetails.school}
                onChange={(e) =>
                  setSecondarySchoolDetails({
                    ...secondarySchoolDetails,
                    school: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="secondarySchoolState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={secondarySchoolDetails.state}
                onChange={(e) =>
                  setSecondarySchoolDetails({
                    ...secondarySchoolDetails,
                    state: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="secondarySchoolYear">
              <Form.Label>Year of Completion</Form.Label>
              <Form.Control
                type="text"
                value={secondarySchoolDetails.year}
                onChange={(e) =>
                  setSecondarySchoolDetails({
                    ...secondarySchoolDetails,
                    year: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => handleSaveClick("secondarySchool")}
            >
              Save
            </Button>
          </Form>
        ) : (
          <>
            <Card.Text>
              Secondary School: {secondarySchoolDetails.school}
            </Card.Text>
            <Card.Text>State: {secondarySchoolDetails.state}</Card.Text>
            <Card.Text>Year: {secondarySchoolDetails.year}</Card.Text>
            <Button
              variant="link"
              onClick={() => handleEditClick("secondarySchool")}
            >
              <FaPencilAlt />
            </Button>
          </>
        )}
        <hr />
      </Card.Body>
    </Card>
  );
};

export default EduBlock;
