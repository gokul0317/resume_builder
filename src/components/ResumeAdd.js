import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { reduxForm, Field, FieldArray } from "redux-form";
import { connect } from "react-redux"
import { Input, Label, Form, FormGroup, Container, Button, Col, Row } from 'reactstrap'
import RenderExperience from './ResumeHelpers/RenderExperience'
import RenderEducation from './ResumeHelpers/RenderEducation'
import RenderSkills from './ResumeHelpers/RenderSkills'
import { loadState, addNewResume, getSingleResume, updatecurrentResume } from '../actions/resume'

let ResumeAdd = (props) => {
    const history = useHistory()
    const { handleSubmit, reset } = props;
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            props.getSingleResume(id)
        } else {
            props.loadState()
        }
    }, [id, props])
    const onSubmit = (values) => {
        if (id) {
            props.updatecurrentResume(values).then(() => history.push("/"))
        } else {
            props.addNewResume(values).then(() => history.push("/"))
        }
    }
    return (
        <Container>
            <h4 style={{ textAlign: "center" }}>Add Deatils</h4>
            <Form onSubmit={handleSubmit(values => onSubmit(values))}>
                <Row form>
                    <Col md={6}>
                        <FormGroup >
                            <Label>First Name</Label>
                            <Input tag={Field} component="input" type="text" name="firstName" placeholder="Enter First Name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input tag={Field} component="input" type="text" name="lastName" placeholder="Enter Last Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input tag={Field} component="input" type="text" name="email" placeholder="Enter Email" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Phone</Label>
                            <Input tag={Field} component="input" type="text" name="phone" placeholder="Enter Phone" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Gender</Label>
                            <Input tag={Field} component="select" type="select" name="gender" >
                                <option selected>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Address</Label>
                            <Input tag={Field} component="textarea" type="textArea" name="address" placeholder="Enter Address" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Pincode</Label>
                            <Input tag={Field} component="input" type="text" name="zipcode" placeholder="Enter ZipCode" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>City</Label>
                            <Input tag={Field} component="input" type="text" name="city" placeholder="Enter City/Town" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Education</Label>{" "}
                    <FieldArray name="education" component={RenderEducation} />
                </FormGroup>
                <FormGroup>
                    <Label>Experience</Label>{" "}
                    <FieldArray name="experience" component={RenderExperience} />
                </FormGroup>
                <FormGroup>
                    <Label>Skills</Label>{" "}
                    <FieldArray name="skills" component={RenderSkills} />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Submit</Button>
                    {" "}
                    <Button color="danger" type="button" onClick={reset}>Reset</Button>
                </FormGroup>
            </Form>
        </Container >
    )
}


ResumeAdd = reduxForm({
    form: 'formData', // a unique identifier for this form
    enableReinitialize: true,
})(ResumeAdd)


ResumeAdd = connect(
    state => {
        return {
            initialValues: state.resumes.resume,  // pull initial values from resume reducer
        }
    },
    { loadState, addNewResume, getSingleResume, updatecurrentResume }
)(ResumeAdd)

export default ResumeAdd