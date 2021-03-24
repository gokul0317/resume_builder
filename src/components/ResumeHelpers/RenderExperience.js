import React from 'react'
import { Input, Label, FormGroup, Button, Col, Row } from 'reactstrap'
import { Field } from "redux-form";
import CustomDate from './DateComponent'

const RenderExperience = ({ fields, meta: { error } }) => (
    <>
        <Button type="button" size="sm" color="primary" onClick={() => fields.push()}>
            +
                </Button>
        <Col>
            {fields.map((experience, index) => (
                <Row key={index}>
                    <Col >

                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                tag={Field}
                                component="input"
                                type="input"
                                name={`${experience}.name`}
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col >

                        <FormGroup>
                            <Label>Job Title</Label>
                            <Input
                                tag={Field}
                                component="input"
                                type="input"
                                name={`${experience}.jobTitle`}
                                placeholder="Job Title"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Label>Start</Label>
                        <Field name={`${experience}.start`} component={CustomDate}/>
                    </Col>
                    <Col>
                        <Label>End</Label>
                        <Field name={`${experience}.end`} component={CustomDate}/>
                    </Col>
                    <Col style={{ display: "grid", justifyContent: "start", alignItems: "center", marginTop: '1rem' }}>
                        <Button
                            type="button"
                            title="Remove Experience"
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

export default RenderExperience