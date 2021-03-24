import React from 'react'
import { Input, Label, FormGroup, Button, Col, Row } from 'reactstrap'
import { Field } from "redux-form";

const RenderEducation = ({ fields, meta: { error } }) => (
    <>
        <Button type="button" size="sm" color="primary" onClick={() => fields.push()}>
            +
        </Button>
        <Col>
            {fields.map((education, index) => (
                <Row key={index}>
                    <Col >

                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                tag={Field}
                                component="input"
                                type="input"
                                name={`${education}.name`}
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col >

                        <FormGroup>
                            <Label>Course Title</Label>
                            <Input
                                tag={Field}
                                component="input"
                                type="input"
                                name={`${education}.courseTitle`}
                                placeholder="Course Title"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Label>Start</Label>
                        <Input
                            tag={Field}
                            component="input"
                            type="input"
                            name={`${education}.start`}
                            placeholder="start Date"
                        />
                    </Col>
                    <Col>
                        <Label>End</Label>
                        <Input
                            tag={Field}
                            component="input"
                            type="input"
                            name={`${education}.end`}
                            placeholder="End Date"
                        />
                    </Col>
                    <Col style={{ display: "grid", justifyContent: "start", alignItems: "center", marginTop: '1rem' }}>
                        <Button
                            type="button"
                            title="Remove Education"
                            onClick={() => fields.remove(index)}
                            size="sm"
                            color="danger"
                        >-</Button>
                    </Col>
                </Row>
            ))}
            {error && <li className="error">{error}</li>}
        </Col>
    </>
)

export default RenderEducation